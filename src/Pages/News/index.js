import React, {useContext} from 'react';
import {NewsContext} from '../../Contexts/news-context';
import NewsList from '../../Components/NewsList';

const News = () => {
  const {news} = useContext(NewsContext);
  return <div className='news'>
    <NewsList news={news}/>
  </div>;
};

export default News;