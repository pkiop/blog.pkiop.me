import React from 'react';
import { testPosts, testFrontmatter } from 'fixture/Post';
import Post from '.';

export default {
  title: 'Posts',
  component: Post,
};

export const MainPosts = () => (
  <Post
    title={testFrontmatter.title}
    date={testFrontmatter.date}
    readTime={testFrontmatter.readTime}
    html={testPosts}
  />
);
