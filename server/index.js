const express = require('express');
const getNews = require('./getNews');
const port = process.env.PORT || 3000;
const app = express();

app.get('/', function (req, res) {
  res.send(JSON.stringify({msg: 'Sundets pärla blir smutsigare för varje dag...'}));
});

app.get('/news', (req, res) => {
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