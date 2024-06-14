const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  const currentTime = new Date().toISOString().split('T')[1].split('.')[0];
  res.send({ time: currentTime });
});

app.listen(port, () => {
  console.log(`Current Time API listening at http://localhost:${port}`);
});
