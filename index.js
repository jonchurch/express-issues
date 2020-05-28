const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res, next) {
  console.log(`parsed Body: ${JSON.stringify(req.body)}`);
  console.log(req.body.ring);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`App now listening at http://localhost:${PORT}`);
});
