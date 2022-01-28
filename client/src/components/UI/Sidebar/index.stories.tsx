import React from 'react';
import Sidebar from './index';

export default {
  title: 'Sidebar',
  component: Sidebar,
};

const testData = [
  {
    mainCategory: { title: '개발', count: 2 },
    emoji: '💻',
    subCategory: [
      { title: 'blog.pkiop.me', count: 2 },
      { title: 'lifemanager', count: 0 },
    ],
  },
  {
    mainCategory: { title: '개발', count: 2 },
    emoji: '💻',
    subCategory: [
      { title: 'blog.pkiop.me', count: 2 },
      { title: 'lifemanager', count: 0 },
    ],
  },
];

export const MainSidebar = () => {
  return <Sidebar categoryList={testData} />;
};
