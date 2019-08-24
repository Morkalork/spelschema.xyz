const expressen = require('./news/expressen');
const skanesport = require('./news/skanesport');
const himmelriket = require('./news/himmelriket');
const aftonbladet = require('./news/aftonbladet');

let lastCheck = new Date();
let data = [];

const getNews = () => {
  return new Promise((resolve, reject) => {
    const now = new Date();
    const timeDiff = Math.round((now - lastCheck) / 1000);
    const timeToUpdate = timeDiff > 3600;

    if (data.length === 0 || timeToUpdate) {
      Promise.all([
        expressen(),
        skanesport(),
        himmelriket(),
        aftonbladet()
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