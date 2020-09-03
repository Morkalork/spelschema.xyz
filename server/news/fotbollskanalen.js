const parser = require('../parser');

const fotbollskanalen = () => {
  return new Promise((resolve, reject) => {
    const URL = 'https://www.fotbollskanalen.se/allsvenskan/malmo-ff/';
    parser(URL)
      .then(($) => {
        const headlines = [];
        $('.tabs .latest-news--long .news-list .news-list__item').each(
          (i, item) => {
            const linkUrl = $(item).find(' > a').attr('href');
            if (!linkUrl) {
              return;
            }
            const fullUrl = `https://www.fotbollskanalen.se${linkUrl}`;
            const headline = $(item)
              .find('.news-list__item-text-headline')
              .text()
              .trim();
            const articleType = $(item)
              .find('.news-list__item-text-section')
              .text()
              .trim();
            const data = {
              headline: `[${articleType}] ${headline}`,
              fullUrl,
            };
            parser(fullUrl).then(($$) => {
              const date = $$(
                '.article-publish-info meta[itemprop="datePublished"]'
              ).attr('content');
              data.date = date;
              headlines.push(data);
            });
          }
        );

        resolve({ title: 'fotbollskanalen', headlines });
      })
      .catch(reject);
  });
};

module.exports = fotbollskanalen;
