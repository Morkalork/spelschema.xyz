import React, {useContext} from 'react';
import {NewsContext} from '../../Contexts/news-context';

const News = () => {
  const {news} = useContext(NewsContext);
  console.log(news);
  return <div className='news'>
    Nyheter
  </div>;
};

export default News;