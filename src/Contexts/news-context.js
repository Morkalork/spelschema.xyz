import React from 'react';

const loadNews = () => {
  return new Promise((resolve, reject) => {
    const url = "/api/news";
    fetch(url).then(response => response.json())
      .then(resolve)
      .catch(reject);
  });
};

export const NewsContext = React.createContext();

export class NewsProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: [],
      lastCheck: '',
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
