const fs = require('fs');
const express = require('express');

const app = express();

const phones = JSON.parse(
  fs.readFileSync(`${__dirname}/assets/data/phones.json`)
);

app.get('/', (req, res) => res.send('Welcome to Phone Catalog App API!'));

app.get('/phones', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: phones.length,
    data: {
      phones
    }
  });
});

app.get('/phones/:id', (req, res) => {
  const phone = phones.find(phone => phone.id === req.params.id);
  if (phone) {
    res.status(200).json({
      status: 'success',
      data: {
        phone
      }
    });
  } else {
    res.status(404).json({
      status: 'fail',
      message: 'Phone not found'
    });
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));