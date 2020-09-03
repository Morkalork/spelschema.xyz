const RssParser = require('rss-parser');

module.exports = async (url) => {
  const parser = new RssParser();
  const feed = await parser.parseURL(url);
  const items = feed.items.length < 10 ? feed.items : feed.items.slice(0, 5);
  return items.map((item) => ({
    title: item.title,
    date: new Date(item.isoDate),
    description: item.contentSnippet,
    id: item.guid,
    link: feed.link,
    podName: feed.title,
  }));
};
