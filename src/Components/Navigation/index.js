import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

const Arrow = styled.div`
  font-size: 2rem;
  width: 2rem;
  text-align: center;
  border-radius: 50%;
  background-color: #FFF;
  color: #A7D7FF;
`;

const getPrevNext = (pathname) => {
  if (pathname === '/news') {
    return {
      prev: '/',
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