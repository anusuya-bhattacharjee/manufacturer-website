const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello From Assignment 12!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})