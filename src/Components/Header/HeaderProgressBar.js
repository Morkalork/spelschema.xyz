import React, {useContext} from 'react';
import styled from 'styled-components';
import {FixtureContext} from '../../Contexts/fixture-context';

const Wrapper = styled.div`
  position: relative;
  height: 2px;
  margin-top: 1rem;
  
  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #fff;
    
    &:first-child {
      opacity: 0.25;
    }
  }
`;

export const HeaderProgressBar = () => {
  const {isUpdating, fetchStatus} = useContext(FixtureContext);
  return <Wrapper>
    <div/>
    <div style={{right: `${isUpdating ? 100 - fetchStatus : 0}%`}}/>
  </Wrapper>;
};