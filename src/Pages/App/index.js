import React from 'react';
import styled from 'styled-components';
import { FixtureProvider } from '../../Contexts/fixture-context';
import { FixtureList } from '../../Components/FixtureList';
import {Header} from '../../Components/Header';

const Wrapper = styled.div`
  min-height: 100%;
  background-color: #A7D7FF;
  padding: 1rem;
  color: #fff;
  text-shadow: 0 0 0.25rem #bbb;
`;

function App() {
  return (
    <Wrapper>
      <FixtureProvider>
        <Header/>
        <FixtureList />
      </FixtureProvider>
    </Wrapper>
  );
}

export default App;
