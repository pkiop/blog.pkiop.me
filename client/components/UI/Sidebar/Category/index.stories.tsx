import React from 'react';
import Category from './index';

export default {
  title: 'Sidebar / Category ',
  component: Category,
};

const testData = {
  mainCategory: { title: '개발', count: 2 },
  emoji: '💻',
  subCategory: [
    { title: 'blog.pkiop.me', count: 2 },
    { title: 'lifemanager', count: 0 },
  ],
};

export const Default = () => {
  return <Category category={testData} />;
};
