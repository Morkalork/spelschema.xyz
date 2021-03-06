const path = require('path');
const express = require('express');
const getNews = require('./getNews');
const getFixtures = require('./getFixtures');
const getTable = require('./getTable');
const port = process.env.PORT || 8080;
const cors = require('cors');
const getAllPods = require('./pods/get-all-pods');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../build')));
app.use('/static', express.static(path.join(__dirname, '/../build')));
app.use(express.static('public'));

app.get('/api/news', (req, res) => {
  getNews()
    .then((headlines) => res.send(JSON.stringify(headlines)))
    .catch(() => res.send(JSON.stringify([])));
});

app.get('/api/fixtures/:monthsAhead', (req, res) => {
  getFixtures(parseInt(req.params.monthsAhead))
    .then((data) => res.send(JSON.stringify(data)))
    .catch(() => res.send(JSON.stringify([])));
});

app.get('/api/teams/table', (req, res) => {
  getTable()
    .then((data) => res.send(JSON.stringify(data)))
    .catch(() => res.send(JSON.stringify([])));
});

app.get('/api/podcasts/:podCastType', (req, res) => {
  getAllPods(req.params.podCastType)
    .then((podCastData) => res.send(JSON.stringify(podCastData)))
    .catch((e) => {
      console.error(e);
      res.send(JSON.stringify([]));
    });
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../build/index.html'));
});

app.listen(port, function () {
  console.log(`mff-nytt.se backend listening on port ${port}!`);
});
