const path = require('path');
const Database = require('better-sqlite3');

const dbPath = process.env.DB_PATH || path.join(__dirname, 'database.sqlite');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY,
    balance INTEGER,
    click_level INTEGER,
    auto_level INTEGER
  )
`);

db.prepare(
  'INSERT OR IGNORE INTO players (id, balance, click_level, auto_level) VALUES (1, 0, 1, 0)'
).run();

module.exports = db;
