import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  max-width: 768px;
  background-color: #000;

  @media screen and (min-width: 769px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    ul {
      li {
        i {
          font-size: 2rem;
        }
      }
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 1rem 0;
  }
`;

const StyledLink = styled(Link)`
  i {
    font-size: 4rem;
    color: #fff;

    &:hover {
      color: #dadada;
    }

    &:active {
      animation: spin 0.25s;
    }

    &.selected {
      color: #a7d7ff;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Navigation = ({ history, location: { pathname }, width }) => {
  return (
    <Wrapper style={{ width }}>
      <ul>
        <li>
          <StyledLink to="/" title="Kalendern">
            <i
              className={`fas fa-calendar-alt ${
                pathname === '/' ? 'selected' : ''
              }`}
            ></i>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/news" title="MFF i media">
            <i
              className={`fas fa-newspaper ${
                pathname === '/news' ? 'selected' : ''
              }`}
            ></i>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/table" title="Allsvenska tabellen">
            <i
              className={`fab fa-artstation ${
                pathname === '/table' ? 'selected' : ''
              }`}
            ></i>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/podcasts" title="Relevanta podcasts">
            <i
              className={`fas fa-podcast ${
                pathname === '/podcasts' ? 'selected' : ''
              }`}
            ></i>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/twitter-feed" title="MFF's twitter-feed">
            <i
              className={`fab fa-twitter ${
                pathname === '/twitter-feed' ? 'selected' : ''
              }`}
            ></i>
          </StyledLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default withRouter(Navigation);
