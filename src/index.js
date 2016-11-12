import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/task2A', (req, res) => {
  let first = 0;
  let second = 0;

  if (parseInt(req.query.a, 10)) {
    first = parseInt(req.query.a, 10);
  }

  if (parseInt(req.query.b, 10)) {
    second = parseInt(req.query.b, 10);
  }

  let sum = first + second

  return res.json(sum);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); // eslint-disable-line
});
