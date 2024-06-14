const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/', async (req, res) => {
//  const { username } = req.body;
  try {
    const [dateRes, timeRes, countryRes] = await Promise.all([
      axios.get('http://date.lemrex.online'),
      axios.get('http://time.lemrex.online'),
      axios.get('http://country.lemrex.online')
    ]);

    const greeting = `Hello, today's date is ${dateRes.data.date} and the time is ${timeRes.data.time} in ${countryRes.data.country}.`;
    res.send({ message: greeting });
  } catch (error) {
    res.status(500).send({ error: 'Failed to retrieve data' });
  }
});

app.listen(port, () => {
  console.log(`Frontend Service listening at http://localhost:${port}`);
});
