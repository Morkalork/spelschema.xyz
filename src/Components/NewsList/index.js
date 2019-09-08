import React from 'react';
import NewsSection from './NewsSection';

const NewsList = ({news}) => {
  if (!news.expressen) {
    return null;
  }

  return <div className='news-list'>
    {Object.keys(news).map((newspaper) => <NewsSection items={news[newspaper]} publicationName={newspaper}/>)}
  </div>;
};

export default NewsList;