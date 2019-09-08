import React, {useState} from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import SlideDown from 'react-slidedown';

const Wrapper = styled.div`
  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
    p {
      transition: .5s;
      transform: rotate(270deg);
    }
  }
  
  &.closed {
    >header {
      p {
        transform: rotate(90deg);
      }
    }
  }
  
  .news-section-content {
    overflow: hidden;
    transition: .5s;
    border-bottom: 2px rgba(255, 255, 255, 0.2) solid;
    margin-bottom: 1rem;
  }
`;

const NewsSection = ({publicationName, items}) => {
  const [isClosed, setIsClosed] = useState(true);
  const onToggleClick = () => setIsClosed(!isClosed);

  return <Wrapper className={isClosed ? 'closed' : ''}>
    <header onClick={onToggleClick}>
      <h2>{publicationName}</h2>
      <p>&gt;</p>
    </header>
    <SlideDown closed={isClosed} className='news-section-content'>
      {items && items.map((newsItem, index) => <NewsItem key={index} newsItem={newsItem} publicationName={publicationName}/>)}
    </SlideDown>
  </Wrapper>;
};

export default NewsSection;