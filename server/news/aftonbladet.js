const parser = require('./parser');

const aftonbladet = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://www.aftonbladet.se/tagg/f3efe5181686d8347a10b130591994e41b21023f';
    parser(URL)
      .then(($) => {
        const headlines = [];
        $('body main > div > div > div:not(:first-child)').each((i, item) => {
          const linkUrl = $(item).find('> a').attr('href');
          const fullUrl = `https://www.aftonbladet.se${linkUrl}`;
          const headline = $(item).find('h3').text();
          headlines.push({
            headline,
            fullUrl
          });
        });

        resolve({title: 'aftonbladet', headlines});
      })
      .catch(reject);
  });
};

module.exports = aftonbladet;