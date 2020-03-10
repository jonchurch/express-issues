const express = require('express');
const cors = require('cors');

const app = express();
const router = express.Router();

// const whitelistOrigins = JSON.parse(process.env.WHITELIST_ORIGINS);
const whitelistOrigins = ['http://localhost:8000'];
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

// this line was omitted from the provided code, but I assume this is what OP must be doing?
app.use(router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
