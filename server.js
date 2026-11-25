const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const getPlayer = db.prepare(
  'SELECT balance, click_level, auto_level FROM players WHERE id = 1'
);
const savePlayer = db.prepare(
  'UPDATE players SET balance = ?, click_level = ?, auto_level = ? WHERE id = 1'
);

app.get('/', (req, res) => {
  res.send('Clicker backend is running');
});

app.get('/api/load', (req, res) => {
  res.json(getPlayer.get());
});

app.post('/api/save', (req, res) => {
  const { balance, click_level, auto_level } = req.body || {};

  const valid = [balance, click_level, auto_level].every(
    (v) => Number.isInteger(v) && v >= 0
  );
  if (!valid) {
    return res
      .status(400)
      .json({ success: false, error: 'Invalid data: integers >= 0 required' });
  }

  savePlayer.run(balance, click_level, auto_level);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
