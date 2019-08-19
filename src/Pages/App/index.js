import React from 'react';
import styled from 'styled-components';
import {FixtureProvider} from '../../Contexts/fixture-context';
import {FixtureList} from '../../Components/FixtureList';
import {Header} from '../../Components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import News from '../News';
import SwipeableRoutes from "react-swipeable-routes";

const Wrapper = styled.div`
  min-height: 100%;
  background-color: #A7D7FF;
  padding: 1rem;
  color: #fff;
  text-shadow: 0 0 0.25rem #bbb;
  display: flex;
  flex-direction: column;
  
  > div {
    flex: 1
  }
`;

function App() {
  return (
    <Wrapper>
      <FixtureProvider>
        <Header/>
        <Router>
          <SwipeableRoutes>
            <Route path='/' exact component={FixtureList}/>
            <Route path='/news' component={News}/>
          </SwipeableRoutes>
        </Router>
      </FixtureProvider>
    </Wrapper>
  );
}

export default App;
