import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

// Serve built React app from dist/
app.use(express.static(path.join(__dirname, 'dist')));

// Telegram form handler
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SPA fallback — serve index.html for all non-file routes
app.get('{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`REXON server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});
