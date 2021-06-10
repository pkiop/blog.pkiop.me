import React from 'react';
import TagList from './index';
import { testTagList } from 'fixture/Tag';

export default {
  title: 'Sidebar / TagList',
  component: TagList,
};

export const MainTagList = () => {
  return <TagList tagList={testTagList} />;
};
