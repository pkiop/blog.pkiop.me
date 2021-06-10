import React from 'react';
import Posts from '.';
import { testPosts, testFrontmatter } from 'fixture/Posts';

export default {
  title: 'Posts',
  component: Posts,
};

export const MainPosts = () => {
  return <Posts frontmatter={testFrontmatter} html={testPosts} />;
};
