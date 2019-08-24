const parser = require('./parser');

const expressen = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://www.expressen.se/tagg/organization/malmo-ff/';
    parser(URL)
      .then(($) => {
        const headlines = [];
        $('.page-list.page-list--large .page-list__item').each((i, item) => {
          const date = $(item).find('.page-list__item__meta time').text();
          const linkUrl = $(item).find('a').attr('href');
          const fullUrl = `https://www.expressen.se${linkUrl}`;
          const headline = $(item).find('h2').text();
          headlines.push({
            date,
            headline,
            fullUrl
          });
        });

        resolve({title: 'expressen', headlines});
      })
      .catch(reject);
  });
};

module.exports = expressen;