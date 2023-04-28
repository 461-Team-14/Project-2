const express = require('express');
const app = express();

app.put('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
