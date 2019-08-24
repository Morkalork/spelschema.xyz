import React, {useContext} from 'react';
import styled from 'styled-components';
import {FixtureContext} from '../../Contexts/fixture-context';
import {HeaderProgressBar} from './HeaderProgressBar';

const Wrapper = styled.header`
  margin-bottom: 1rem;
`;

const StyledH1 = styled.header`
  font-size: 1.75rem;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`;

const Spinner = styled.p`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-359deg);
    }
  }
  
  display: inline-block;
  &.updating {
    animation: spinner 4s linear infinite;
  }
`;

const SmallParagraph = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;
`;

export const Header = () => {
  const {reload, lastCheck, isUpdating, fetchStatus} = useContext(FixtureContext);

  return (<Wrapper>
    <StyledH1><p>Malmös matcher</p> <Spinner className={isUpdating ? 'updating' : ''}
                                             onClick={reload}>⟲</Spinner></StyledH1>
    <SmallParagraph>
      Senast uppdaterad:
      {isUpdating && `Hämtar data (${fetchStatus}%)`}
      {!isUpdating && lastCheck}
    </SmallParagraph>
    <HeaderProgressBar/>
  </Wrapper>);
};