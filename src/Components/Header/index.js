import React from 'react';
import {withRouter} from 'react-router-dom';
import {FixtureHeader, NewsHeader, TableHeader, TwitterFeedHeader} from './Headers';

const Header = ({location: {pathname}}) => {
  let VariableHeader = null;
  switch (pathname) {
    case '/news':
      VariableHeader = NewsHeader;
      break;
    case '/table':
      VariableHeader = TableHeader;
      break;
    case '/twitter-feed':
      VariableHeader = TwitterFeedHeader;
      break;
    default:
      VariableHeader = FixtureHeader;
      break;
  }

  return (<VariableHeader/>);
};

export default withRouter(Header);