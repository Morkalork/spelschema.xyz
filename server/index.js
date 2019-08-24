const path = require('path');
const express = require('express');
const getNews = require('./getNews');
const port = process.env.PORT || 8080;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../build')));
app.use('/static', express.static(path.join(__dirname, '/../build')));

app.get('/api/news', (req, res) => {
  getNews()
    .then((headlines) => res.send(JSON.stringify(headlines)))
    .catch(() => res.send(JSON.stringify([])));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../build/index.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});