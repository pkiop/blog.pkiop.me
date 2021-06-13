import React from 'react';
import SubCategory from './index';

export default {
  title: 'Sidebar / Category / SubCategory',
  component: SubCategory,
};

const testData = [
  { title: 'blog.pkiop.me', count: 2 },
  { title: 'lifemanager', count: 0 },
];

export const MainSubCategory = () => {
  return <SubCategory subCategory={testData} />;
};
