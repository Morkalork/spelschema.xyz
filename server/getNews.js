const expressen = require('./news/expressen');
const fotbollSkane = require('./news/fotboll-skane');
const himmelriket = require('./news/himmelriket');
const aftonbladet = require('./news/aftonbladet');
const fotbollskanalen = require('./news/fotbollskanalen');
const fotbolldirekt = require('./news/fotbolldirekt');

let lastCheck = new Date();
let data = [];

const getNews = () => {
  return new Promise((resolve, reject) => {
    const now = new Date();
    const timeDiff = Math.round((now - lastCheck) / 1000);
    const timeToUpdate = timeDiff > 3600;

    if (data.length === 0 || timeToUpdate) {
      console.log('Updating news cache at ' + new Date());
      Promise.all([
        expressen(),
        fotbollSkane(),
        himmelriket(),
        aftonbladet(),
        fotbollskanalen(),
        fotbolldirekt(),
      ])
        .then((result) => {
          lastCheck = now;
          data = result.reduce((acc, val) => {
            acc[val.title] = val.headlines;
            return acc;
          }, {});
          resolve(data);
        })
        .catch(reject);
    } else {
      resolve(data);
    }
  });
};

module.exports = getNews;
