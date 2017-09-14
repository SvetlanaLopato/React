const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log('App application listening on port 3000!')
})
