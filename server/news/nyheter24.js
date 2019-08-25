const parser = require('./parser');

const nyheter24 = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://nyheter24.se/malmo-ff';
    parser(URL)
      .then(($) => {
        const headlines = [];
        $('.newsfeed_box .newsfeed_container .newsfeed_item').each((i, item) => {
          const linkUrl = $(item).find('.newsfeed_item_title > a').attr('href');
          const fullUrl = `https://nyheter24.se${linkUrl}`;
          const headline = $(item).find('.newsfeed_item_title').text().trim();
          headlines.push({
            headline,
            fullUrl
          });
        });

        resolve({title: 'nyheter24', headlines});
      })
      .catch(reject);
  });
};

module.exports = nyheter24;