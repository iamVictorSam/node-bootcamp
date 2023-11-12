
const express = require('express');

const app = express();

app.use('/add-prod', (req, res, next) => {
  res.send('<h1>This is the "Add Product Page"</h1>');
  next();
});

app.use('/', (req, res, next) => {
  console.log('Im middleware 2')
  res.send('<h1>Welcome to Express JS"</h1>');

});


app.listen(3000);
