const expressen = require('./news/expressen');
const skanesport = require('./news/skanesport');
const himmelriket = require('./news/himmelriket');

let lastCheck = new Date();
let data = [];

const getNews = () => {
  return new Promise((resolve, reject) => {
    const now = new Date();
    const timeDiff = Math.round((now - lastCheck) / 1000);
    console.log({timeDiff});
    const timeToUpdate = timeDiff > 3600;

    if (data.length === 0 || timeToUpdate) {
      console.log('UPDATING!');
      Promise.all([
        expressen(),
        skanesport(),
        himmelriket()
      ])
        .then(([expressen, skanesport, himmelriket]) => {
          lastCheck = now;
          data = {expressen, skanesport, himmelriket};
          resolve(data);
        })
        .catch(reject);
    } else {
      resolve(data);
    }
  });
};

module.exports = getNews;