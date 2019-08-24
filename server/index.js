const path = require('path');
const express = require('express');
const getNews = require('./getNews');
const port = process.env.PORT || 8080;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../build')));
app.use('/static', express.static(path.join(__dirname, '/../build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../build/index.html'));
});

app.get('/api/news', (req, res) => {
  console.log('NEWS!');
  Promise.all([
    getNews.expressen(),
    getNews.skanesport(),
    getNews.himmelriket()
  ]).then(([expressen, skanesport, himmelriket]) => {
    const total = {expressen, skanesport, himmelriket};
    res.send(JSON.stringify(total));
  });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});