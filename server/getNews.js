const expressen = require('./news/expressen');
const skanesport = require('./news/skanesport');
const himmelriket = require('./news/himmelriket');
const aftonbladet = require('./news/aftonbladet');
const fotbollskanalen = require('./news/fotbollskanalen');
const fotbolldirekt = require('./news/fotbolldirekt');
const nyheter24 = require('./news/nyheter24');

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
        skanesport(),
        himmelriket(),
        aftonbladet(),
        fotbollskanalen(),
        fotbolldirekt(),
        nyheter24()
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