const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const FILE_PATH = path.join(__dirname, 'data', 'architecture.json');

app.use(express.json());
app.use(express.static('public'));

// Get all entries
app.get('/api/entries', (req, res) => {
  const json = JSON.parse(fs.readFileSync(FILE_PATH));
  res.json(json.entries);
});

// Get single entry
app.get('/api/entries/:id', (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync(FILE_PATH));
  const entry = data.entries.find(e => e.id === id);
  if (!entry) return res.status(404).send('Not found');
  res.json(entry);
});

// Update an entire entry (replace it)
app.put('/api/entries/:id', (req, res) => {
  const { id } = req.params;
  const updated = req.body;
  const data = JSON.parse(fs.readFileSync(FILE_PATH));
  const idx = data.entries.findIndex(e => e.id === id);
  if (idx === -1) return res.status(404).send('Not found');
  data.entries[idx] = updated;
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  res.json(updated);
});

// Add new history item
app.post('/api/entries/:id/history', (req, res) => {
  const { id } = req.params;
  const historyItem = req.body;
  const data = JSON.parse(fs.readFileSync(FILE_PATH));
  const entry = data.entries.find(e => e.id === id);
  if (!entry) return res.status(404).send('Not found');
  entry.timeline.push(historyItem);
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  res.json(entry);
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
