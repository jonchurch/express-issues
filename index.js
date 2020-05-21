const express = require('express');

const iThrow = require('./anotherModule');

const app = express();

app.get('/test', async (req, res, next) => {
  await wait(3);
  await iThrow();
  res.json({ ok: true });
});

function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, sec * 1000);
  });
}
app.get('/', (req, res, next) =>
  wait(3).then(() => Promise.reject(new Error('Where did I occur?')))
);

async function badMiddleware(req, res, next) {
  await iThrow();
}
app.get('/middleware', badMiddleware, (req, res) => {
  //
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);
