import React from 'react';

const NEWS_KEY = 'mm-news';
const NEWS_LAST_CHECK = 'mm-last-check';

const loadNewsFromServer = () => {
  return new Promise((resolve, reject) => {
    const url = "/api/news";
    fetch(url).then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

const loadNews = async () => {
  const now = Date.now();
  const storedLastCheck = localStorage.getItem(NEWS_LAST_CHECK);
  const lastCheck = storedLastCheck ? parseInt(storedLastCheck) : 0;
  const timeDiff = Math.round((now - lastCheck) / 1000);
  const timeToUpdate = timeDiff > 3600;
  const storedNews = localStorage.getItem(NEWS_KEY) || '[]';
  let news = JSON.parse(storedNews);
  if (!lastCheck || timeToUpdate) {
    news = await loadNewsFromServer();
    localStorage.setItem(NEWS_KEY, JSON.stringify(news));
    localStorage.setItem(NEWS_LAST_CHECK, now);
  }

  return news;
};

export const NewsContext = React.createContext();

export class NewsProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      hasError: false,
      reload: () => {
        this.doReload();
      }
    };
  }

  async doReload() {
    const news = await loadNews();
    this.setState({
      news: news || []
    });
  }

  componentDidMount() {
    this.doReload();
  }

  render() {
    return (
      <NewsContext.Provider value={this.state}>
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}
