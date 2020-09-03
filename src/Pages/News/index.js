import React, { useContext } from 'react';
import { NewsContext } from '../../Contexts/news-context';
import NewsList from '../../Components/NewsList';
import NewsFeed from '../../Components/NewsFeed';

const News = () => {
  const { news } = useContext(NewsContext);
  return (
    <div className="news">
      <NewsList news={news} />
      <NewsFeed news={news} />
    </div>
  );
};

export default News;
