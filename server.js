const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Telegram form handler
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`REXON server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
