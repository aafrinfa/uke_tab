const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.get('/status', (req, res) => {
  res.send('Hello World!');
})

app.listen(process.env.PORT || 8081)
