import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  a {
    color: black;
    text-decoration: none;
    
    h3 {
      font-size: 0.85rem;
    }
    
    section {
      p {
        font-size: 0.65rem;
        font-style: italic;
      }
    }
  }
`;

const NewsItem = ({newsItem}) => <Wrapper>
  <a href={newsItem.fullUrl}>
    <header>
      <h3>{newsItem.headline} ↪</h3>
    </header>
    <section>
      <p><em>{newsItem.date}</em></p>
    </section>
  </a>
</Wrapper>;

export default NewsItem;