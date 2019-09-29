import React, {useContext} from 'react';
import {NewsContext} from '../../Contexts/news-context';
import {FixtureContext} from '../../Contexts/fixture-context';
import BaseHeader from './BaseHeader';
import {TableContext} from '../../Contexts/table-context';

export const FixtureHeader = () => {
  const {reload, lastCheck, isUpdating} = useContext(FixtureContext);
  const headerText = 'matcher';
  return <BaseHeader headerText={headerText} isUpdating={isUpdating} lastCheck={lastCheck} reload={reload}/>;
};

export const NewsHeader = () => {
  const {reload, lastCheck, isUpdating} = useContext(NewsContext);
  const headerText = 'nyheter';
  return <BaseHeader headerText={headerText} isUpdating={isUpdating} lastCheck={lastCheck} reload={reload}/>;
};

export const TableHeader = () => {
  const {reload, lastCheck, isUpdating} = useContext(TableContext);
  const headerText = 'tabellen';
  return <BaseHeader headerText={headerText} isUpdating={isUpdating} lastCheck={lastCheck} reload={reload}/>;
};

export const TwitterFeedHeader = () => {
  const headerText = 'twitter feed';
  return <BaseHeader headerText={headerText} isUpdating={false} lastCheck={0}/>;
};

