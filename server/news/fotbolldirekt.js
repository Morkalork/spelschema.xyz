const parser = require('../parser');

const fotbolldirekt = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://www.fotbolldirekt.se/kategori/malmo-ff';
    parser(URL)
      .then(($) => {
        const headlines = [];
        $('body .site-content .container .row .c-vertical-article__body').each((i, item) => {
          const fullUrl = $(item).find(' > a.c-vertical-article__title').attr('href');
          const headline = $(item).find('.c-vertical-article__title').text().trim();
          const articleType = $(item).find('> a:first-child').text().trim();
          headlines.push({
            headline: `[${articleType}] ${headline}`,
            fullUrl
          });
        });

        resolve({title: 'fotbolldirekt', headlines});
      })
      .catch(reject);
  });
};

module.exports = fotbolldirekt;