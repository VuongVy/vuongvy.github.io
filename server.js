import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
