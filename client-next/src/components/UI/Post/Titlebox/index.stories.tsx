import React from 'react';
import { testFrontmatter } from 'fixture/Post';
import Titlebox from './index';

export default {
  title: 'Posts / Titlebox',
  component: Titlebox,
};

export const MainTitlebox = () => (
  <Titlebox title={testFrontmatter.title} date={testFrontmatter.date} />
);
