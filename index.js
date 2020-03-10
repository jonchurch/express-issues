const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

function log(req, res, next) {
  console.log(req.method, req.path);
  next();
}

// const whitelistOrigins = JSON.parse(process.env.WHITELIST_ORIGINS);
const whitelistOrigins = ['http://localhost:8000', 'https://www.google.com'];
const corsOptions = {
  origin(origin, callback) {
    if (whitelistOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback('Not allowed by CORS');
    }
  },
};
app.get('/test', (req, res) => {
  res.json({ ok: true });
});

app.use(log);

router.options('*', cors(corsOptions));

router.use(cors(corsOptions));

// mocked dataRouter
// this was omitted in OP's post, I'm assuming they are creating another router
const dataRouter = express.Router();
dataRouter.delete('/del', (req, res) => {
  res.send('delete');
});
dataRouter.put('/put', (req, res) => {
  res.send('put');
});
dataRouter.get('/get', (req, res) => {
  res.send('get');
});
router.use('/data', dataRouter);

// this line was omitted from the provided code, but I assume this is what OP is doing
app.use(router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
