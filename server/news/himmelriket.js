const parser = require('./parser');

const himmelriket = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://www.svenskafans.com/rss/team/92';
    parser(URL, true)
      .then(($) => {
        const headlines = [];
        $('rss channel item').each((i, item) => {
          const date = $(item).find('pubDate').text();
          const fullUrl = $(item).find('link').text();
          const headline = $(item).find('title').text();
          headlines.push({
            date,
            headline,
            fullUrl
          });
        });

        resolve({title: 'himmelriket', headlines});
      })
      .catch(reject);
  });
};

himmelriket();

module.exports = himmelriket;