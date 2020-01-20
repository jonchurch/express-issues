const express = require('express');

const app = express();

app.get('/test', (req, res) => {
  res.json({ ok: true });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
