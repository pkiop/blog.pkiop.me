import React from 'react';
import ReadTime from './index';
import { testFrontmatter } from 'fixture/Posts';

export default {
  title: 'Posts / ReadTime',
  component: ReadTime,
};

export const MainReadTime = () => {
  return <ReadTime readTime={4} />;
};
