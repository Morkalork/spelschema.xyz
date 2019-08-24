import React from 'react';
import RssParser from 'rss-parser';

const loadExpressen = () => {
  return new Promise((resolve, reject) => {
    const url = "https://www.svenskafans.com/rss/team/92";
    const parser = new RssParser();
    parser.parseURL(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).then((data) => {
      console.log({data});
    });
  });
};

const loadNews = async monthsAhead => {
  Promise.all([
    loadExpressen()
  ]).then(([expressen]) => {
    console.log({expressen});
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
    })
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
