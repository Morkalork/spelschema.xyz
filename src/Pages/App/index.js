import React from 'react';
import styled from 'styled-components';
import { FixtureProvider } from '../../Contexts/fixture-context';
import { FixtureList } from '../../Components/FixtureList';
import Header from '../../Components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import News from '../News';
import SwipeableRoutes from 'react-swipeable-routes';
import { NewsProvider } from '../../Contexts/news-context';
import Navigation from '../../Components/Navigation';
import { TableProvider } from '../../Contexts/table-context';
import Table from '../Table';
import TwitterFeed from '../TwitterFeed';
import Podcasts from '../Podcasts';

const Wrapper = styled.div`
  min-height: 100%;
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
      margin-bottom: 3rem;
      flex: 0;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;

      p:last-child {
        font-size: 2rem;
        padding-right: 1rem;
      }
    }
  }

  > div {
    flex: 1;
  }

  .react-swipeable-view-container {
    > div {
      overflow-x: hidden !important; // This is what you get for using 3rd party plugins...
      > div {
        padding: 1rem;
      }
    }
  }
`;

const App = () => {
  const scrollToTop = (index) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    return true;
  };

  return (
    <Wrapper>
      <div className="flesktop">
        <p>Denna sida är mobilanpassad, gamling...</p>
        <p>●</p>
      </div>
      <FixtureProvider>
        <NewsProvider>
          <TableProvider>
            <Router>
              <Header />
              <SwipeableRoutes onChangeIndex={scrollToTop}>
                <Route path="/" exact component={FixtureList} />
                <Route path="/news" component={News} />
                <Route path="/table" component={Table} />
                <Route path="/podcasts" component={Podcasts} />
                <Route path="/twitter-feed" component={TwitterFeed} />
              </SwipeableRoutes>
              <Navigation />
            </Router>
          </TableProvider>
        </NewsProvider>
      </FixtureProvider>
    </Wrapper>
  );
};

export default App;
