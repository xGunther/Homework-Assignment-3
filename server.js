const express = require('express');
const app = express();
const port = 8058;

app.use(express.static('public'));
app.use(express.static('index.html'));
app.use(express.static('login.html'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});