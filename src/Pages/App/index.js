import React from 'react';
import styled from 'styled-components';
import {FixtureProvider} from '../../Contexts/fixture-context';
import {FixtureList} from '../../Components/FixtureList';
import {Header} from '../../Components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import News from '../News';
import SwipeableRoutes from "react-swipeable-routes";
import {NewsProvider} from '../../Contexts/news-context';

const Wrapper = styled.div`
  min-height: 100%;
  padding: 1rem;
  color: #fff;
  text-shadow: 0 0 0.25rem #bbb;
  display: flex;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto;
  
  .flesktop {
    display: none;
  }
  
  @media screen and (min-width: 769px) {
    margin: 2rem auto;
    border: 12px #000 solid;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem #333;
  
    .flesktop {
      background-color: #000;
      height: 1rem;
      margin: -1rem;
      margin-bottom: 3rem;
      flex: 0;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      p:last-child {
        font-size: 2rem;
        padding-right: 1rem;   
      }
    }
  }
  
  > div {
    flex: 1
  }
`;

function App() {
  return (
    <Wrapper>
      <div className='flesktop'>
        <p>Denna sida är mobilanpassad farfar...</p>
        <p>●</p>
      </div>
      <FixtureProvider>
        <NewsProvider>
          <Header/>
          <Router>
            <SwipeableRoutes>
              <Route path='/' exact component={FixtureList}/>
              <Route path='/news' component={News}/>
            </SwipeableRoutes>
          </Router>
        </NewsProvider>
      </FixtureProvider>
    </Wrapper>
  );
}

export default App;
