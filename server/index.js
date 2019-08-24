const express = require('express');
const getNews = require('./getNews');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/../build'));
app.use('/static', express.static(__dirname + '/../build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/../build/index.html');
});

app.get('/static', function (req, res) {
  res.sendFile(__dirname + '/../build/index.html');
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