const parser = require('./parser');

const skanesport = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://skanesport.se/bloggar/oles-mff-blogg/';
    parser(URL)
      .then(($) => {
        const headlines = [];
        $('.mag-box .container-wrapper #posts-container .post-item').each((i, item) => {
          const date = $(item).find('.date.meta-item span:last-child').text();
          const fullUrl = $(item).find('a.post-thumb').attr('href');
          const headline = $(item).find('h3').text();
          headlines.push({
            date,
            headline,
            fullUrl
          });
        });

        resolve(headlines);
      })
      .catch(reject);
  });
};

module.exports = skanesport;