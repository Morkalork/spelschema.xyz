import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 1rem;

  a {
    text-decoration: none;
    color: #eaeaea;
    > div {
      background-color: #333;
      padding: 1rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      section {
        &:first-child {
          max-width: 80%;
        }
      }

      .emoji {
        font-size: 2rem;
      }
    }
  }
`;

export const PodcastSection = ({ title, href, description }) => (
  <StyledWrapper className="podcast-section">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div>
        <section>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
        <section>
          <span className="emoji" role="img" aria-label="Podcast">
            📻
          </span>
        </section>
      </div>
    </a>
  </StyledWrapper>
);
