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

app.get('/task2B', (req, res) => {
  let words = req.query.fullname.split(' ').reverse();
  let result = words[0];

  if (req.query.fullname.match(/[0-9]|_|\//) || !req.query.fullname || words.length > 3) {
    return res.send('Invalid fullname');
  }

  if (words[2]) {
    result += ' ' + words[2][0] + '.'
  }

  if (words[1]) {
    result += ' ' + words[1][0] + '.'
  }

  return res.send(result);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!'); // eslint-disable-line
});
