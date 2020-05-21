const express = require('express');

const iThrow = require('./anotherModule');

const app = express();

app.get('/test', async (req, res, next) => {
  await iThrow();
  res.json({ ok: true });
});

app.get('/', async (req, res, next) => {
  throw new Error('Where did I occur?');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
