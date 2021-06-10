import React from 'react';
import Sidebar from './index';
import { testCategoryList } from 'fixture/Category';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

export const MainSidebar = () => {
  return <Sidebar categoryList={testCategoryList} />;
};
