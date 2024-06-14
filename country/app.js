const express = require('express');
const app = express();
const port = 3001;

const countries = ["USA", "Canada", "Germany", "France", "Japan", "Australia"];

app.get('/', (req, res) => {
  const randomCountry = countries[Math.floor(Math.random() * countries.length)];
  res.send({ country: randomCountry });
});

app.listen(port, () => {
  console.log(`Random Country API listening at http://localhost:${port}`);
});
