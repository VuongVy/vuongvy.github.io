const express = require('express');
const path = require('path');
const app = express();

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Route for homepage (hero-page)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'hero-page.html'));
});

// Route for About Us page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about-page.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
