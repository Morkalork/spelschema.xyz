import React, {useContext} from 'react';
import styled from 'styled-components';
import {NewsContext} from '../../Contexts/news-context';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  a {
    color: #fff;
    text-decoration: none;
    
    h3 {
      font-size: 0.85rem;
      span {
        display: none;
      }
    }
    
    section {
      p {
        font-size: 0.65rem;
        font-style: italic;
      }
    }
    
    &.isRead {
      h3 {
        opacity: 0.5;
        span {
          display: inline;
        }
      }
    }
  }
`;

const NewsItem = ({newsItem, publicationName}) => {
  const {setReadNews, readNews} = useContext(NewsContext);
  const onClickLink = () => setReadNews(newsItem.headline, publicationName);
  const isRead = readNews.find((item) => item.publicationName === publicationName && item.headline === newsItem.headline);
  return <Wrapper>
    <a href={newsItem.fullUrl} rel='noopener noreferrer' onClick={onClickLink} className={isRead ? 'isRead' : ''} target='_blank'>
      <header>
        <h3>{newsItem.headline} <span>(läst)</span></h3>
      </header>
      <section>
        <p><em>{newsItem.date}</em></p>
      </section>
    </a>
  </Wrapper>;
};

export default NewsItem;