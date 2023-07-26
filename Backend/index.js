const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


app.use(express.json());

app.post('/train/register', async (req, res) => {
  const url = 'http://20.244.56.144/train/register';

  try {
    const response = await axios.post(url, req.body);
    console.log('Response:', response.data);
    res.status(200).json(response.data); 
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred while making the request.' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
