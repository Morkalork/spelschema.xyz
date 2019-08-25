import React from 'react';
import NewsSection from './NewsSection';

const NewsList = ({news}) => {
  if (!news.expressen) {
    return null;
  }

  return <div className='news-list'>
    <NewsSection items={news.expressen} publicationName='Expressen'/>
    <NewsSection items={news.aftonbladet} publicationName='Aftonbladet'/>
    <NewsSection items={news.skanesporten} publicationName='Skånesporten'/>
    <NewsSection items={news.himmelriket} publicationName='Himmelriket'/>
    <NewsSection items={news.fotbollskanalen} publicationName='Fotbollskanalen'/>
  </div>;
};

export default NewsList;