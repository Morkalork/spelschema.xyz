const feeds = require('./feeds');
const itunesParser = require('./itunes-parser');

module.exports = (podType) => {
  return Promise.all(
    Object.keys(feeds[podType]).map((key) => itunesParser(feeds[podType][key]))
  );
};
