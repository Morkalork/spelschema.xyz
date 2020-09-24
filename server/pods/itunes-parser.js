const RssParser = require('rss-parser');

const forbiddenTitleWords = ['HIF-podd'];
const badLinks = {
  'Blått Snack': 'https://poddtoppen.se/podcast/1085802878/blatt-snack',
  'Allsvenska Podden': 'https://podcast.aftonbladet.se/p/allsvenska-podden/',
  Frustrationspodden:
    'https://poddtoppen.se/podcast/1516464835/frustrationspodden',
};
module.exports = async (url) => {
  const parser = new RssParser();
  let feed;
  try {
    feed = await parser.parseURL(url);
  } catch {
    return [];
  }
  const items = feed.items.length < 10 ? feed.items : feed.items.slice(0, 5);
  const getLink = (item) => {
    const badLink = Object.keys(badLinks).find(
      (key) => key === feed.title.trim()
    );
    return badLink ? badLinks[badLink] : item.link;
  };
  return items
    .filter(
      (item) =>
        !forbiddenTitleWords.some((titleWord) => item.title.includes(titleWord))
    )
    .map((item) => ({
      title: item.title,
      date: new Date(item.isoDate),
      description: item.contentSnippet,
      id: item.guid,
      link: getLink(item),
      podName: feed.title,
    }));
};
