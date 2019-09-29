import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  
  > div {
    &:first-child {
      margin-right: 0.25rem;
    }
  }
`;

const Arrow = styled.div`
  font-size: 2rem;
  width: 2rem;
  text-align: center;
  border-radius: 50%;
  background-color: rgba(167,215,255, 0.25);
  text-shadow: none;
  opacity: 0.8;
`;

const getPrevNext = (pathname) => {
  if (pathname === '/news') {
    return {
      prev: '/',
      next: '/table'
    };
  } else if (pathname === '/table') {
    return {
      prev: '/news',
      next: '/twitter-feed'
    };
  } else if (pathname === '/twitter-feed') {
    return {
      prev: '/table',
      next: null
    };
  }

  return {
    prev: null,
    next: '/news'
  };
};

const Navigation = ({history, location: {pathname}}) => {
  const {prev, next} = getPrevNext(pathname);
  return <Wrapper>
    {prev && <Arrow onClick={() => history.push(prev)}>&lt;</Arrow>}
    {next && <Arrow onClick={() => history.push(next)}>&gt;</Arrow>}
  </Wrapper>;
};

export default withRouter(Navigation);