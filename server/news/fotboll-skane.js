const parser = require('../parser');

const fotbollSkane = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://fotbollskane.se/tag/malmo-ff/';
    parser(URL)
      .then(($) => {
        const headlines = [];
        $('.blog-masonry article.post').each((i, item) => {
          const date = $(item).find('footer.entry-meta span.post-date a time').text().trim();
          const fullUrl = $(item).find('header h1.entry-title a').attr('href');
          const headline = $(item).find('div.entry-content a p').text();
          headlines.push({
            date,
            headline,
            fullUrl
          });
        });

        resolve({title: 'fotboll SKÅNE', headlines});
      })
      .catch(reject);
  });
};

module.exports = fotbollSkane;