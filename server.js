const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 5173;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup data file
const dataFile = path.join(__dirname, 'data.json');
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify([]));
}

// Setup uploads folder
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve public directory and root files like anatomy.html
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static(__dirname)); // This allows hitting /anatomy.html

// Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  }
});
const upload = multer({ storage: storage });

// API: Get all expenses
app.get('/api/expenses', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    // sort by newest first
    data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to read data' });
  }
});

// API: Create new expense
app.post('/api/expenses', upload.single('billImage'), (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    const newExpense = {
      id: Date.now().toString(),
      amount: parseFloat(req.body.amount || 0),
      note: req.body.note || '',
      imagePath: req.file ? `/uploads/${req.file.filename}` : '',
      status: 'pending',
      rejectReason: '',
      timestamp: new Date().toISOString()
    };
    data.push(newExpense);
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.json(newExpense);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// API: Update existing expense (if rejected or pending, employee can update)
app.put('/api/expenses/:id', upload.single('billImage'), (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    const id = req.params.id;
    const index = data.findIndex(e => e.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Not found' });
    }

    const expense = data[index];
    // employee can only update if pending or rejected
    if (expense.status === 'approved') {
      return res.status(400).json({ error: 'Cannot update approved expense' });
    }

    expense.amount = parseFloat(req.body.amount || expense.amount);
    expense.note = req.body.note || expense.note;
    if (req.file) {
      // update image
      expense.imagePath = `/uploads/${req.file.filename}`;
    }

    // Reset status to pending when updated
    expense.status = 'pending';
    expense.rejectReason = '';
    expense.timestamp = new Date().toISOString(); // optional: update timestamp

    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.json(expense);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to update data' });
  }
});

// API: Admin update status (Approve / Reject)
app.put('/api/expenses/:id/status', (req, res) => {
  try {
    // Simple admin token check
    if (req.headers.authorization !== 'Bearer vy_admin_token') {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    const id = req.params.id;
    const { status, rejectReason } = req.body;

    const index = data.findIndex(e => e.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Not found' });
    }

    if (status !== 'approved' && status !== 'rejected' && status !== 'pending') {
      return res.status(400).json({ error: 'Invalid status' });
    }

    data[index].status = status;
    if (status === 'rejected') {
      data[index].rejectReason = rejectReason || 'Không có lý do';
    } else {
      data[index].rejectReason = '';
    }

    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
    res.json(data[index]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to update status' });
  }
});

// API: Admin Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'vy' && password === 'vy123@') {
    res.json({ token: 'vy_admin_token', success: true });
  } else {
    res.status(401).json({ error: 'Tài khoản hoặc mật khẩu không đúng', success: false });
  }
});

// Fallback to index.html for undefined routes if SPA, but we'll use separate files.
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

process.on('SIGINT', () => {
  console.log('Server shutting down...');
  server.close();
});
