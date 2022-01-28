import React from 'react';
import ContentsList from './index';
import { testContentList } from 'fixture/ContentsList';

export default {
  title: 'ContentsList',
  component: ContentsList,
};

export const MainContentsList = () => {
  return <ContentsList contentsList={testContentList} />;
};
