const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.post('/register', (req, res) => {
  console.log('Received registration data:', req.body);
  res.send({
        message: `User ${req.body.email} registered successfully`
    });
})


app.listen(process.env.PORT || 8081)
