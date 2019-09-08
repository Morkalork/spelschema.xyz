const parser = require('./parser');
const ultraCacher = require('./ultra-cacher');

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://www.allsvenskan.se/tabell/';
    parser(URL, true)
      .then(($) => {
        const teams = [];
        $('.show__desktop table.table tbody tr').each((i, item) => {
          teams.push({
            team: $(item).find('td:nth-child(4)').text(),
            numberOfGames: $(item).find('td:nth-child(5)').text(),
            wins: $(item).find('td:nth-child(6)').text(),
            draws: $(item).find('td:nth-child(7)').text(),
            losses: $(item).find('td:nth-child(8)').text(),
            diff: $(item).find('td:nth-child(9)').text(),
            points: $(item).find('td:nth-child(10)').text(),
          });
        });

        resolve(teams);
      })
      .catch(reject);
  });
};

const getTable = () => {
  const cacheTimeout = 3600; // 1 hours
  return ultraCacher('table', cacheTimeout, fetchData);
};

getTable();

module.exports = getTable;