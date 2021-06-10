import React from 'react';
import Titlebox from './index';
import { testFrontmatter } from 'fixture/Posts';

export default {
  title: 'Posts / Titlebox',
  component: Titlebox,
};

export const MainTitlebox = () => {
  return <Titlebox title={testFrontmatter.title} date={testFrontmatter.date} />;
};
