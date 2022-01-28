import React from 'react';
import Content from './index';
import { testContent } from 'fixture/ContentsList';

export default {
  title: 'Content',
  component: Content,
};

export const MainContent = () => {
  return <Content content={testContent} />;
};
