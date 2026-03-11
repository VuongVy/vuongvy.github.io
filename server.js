const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname)));

const dataFile = path.join(__dirname, 'data.json');

let requests = [];
if (fs.existsSync(dataFile)) {
  try { requests = JSON.parse(fs.readFileSync(dataFile, 'utf8')); }
  catch (e) { requests = []; }
}
const saveData = () => fs.writeFileSync(dataFile, JSON.stringify(requests));

// Check login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'vy' && password === 'vy123@') {
    res.json({ success: true, role: 'admin' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Get all requests
app.get('/api/requests', (req, res) => {
  res.json(requests);
});

// Create request
app.post('/api/requests', (req, res) => {
  const newRequest = {
    id: Date.now().toString(),
    employeeId: req.body.employeeId || 'employee',
    amount: req.body.amount || 0,
    note: req.body.note || '',
    photo: req.body.photo || null,
    status: 'pending', // 'pending', 'approved', 'rejected'
    reason: '',
    createdAt: new Date().toISOString()
  };
  requests.push(newRequest);
  saveData();
  res.json(newRequest);
});

// Update request (Approve, Reject, or Employee Update)
app.put('/api/requests/:id', (req, res) => {
  const request = requests.find(r => r.id === req.params.id);
  if (!request) return res.status(404).json({ error: 'Request not found' });

  if (req.body.status) request.status = req.body.status;
  if (req.body.reason !== undefined) request.reason = req.body.reason;
  if (req.body.note !== undefined) request.note = req.body.note;
  if (req.body.amount !== undefined) request.amount = req.body.amount;
  if (req.body.photo !== undefined) request.photo = req.body.photo;

  saveData();
  res.json(request);
});

// Delete request (Cancel by Employee)
app.delete('/api/requests/:id', (req, res) => {
  const initialLength = requests.length;
  requests = requests.filter(r => r.id !== req.params.id);
  if (requests.length === initialLength) return res.status(404).json({ error: 'Request not found' });

  saveData();
  res.json({ success: true, message: 'Request deleted' });
});

// Serve frontend pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
