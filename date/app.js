const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  res.send({ date: today });
});

app.listen(port, () => {
  console.log(`Today's Date API listening at http://localhost:${port}`);
});
