import React from 'react';
import Category from './index';
import { testCategoryList } from 'fixture/Category';

export default {
  title: 'Sidebar / Category ',
  component: Category,
};

export const Default = () => {
  return <Category category={testCategoryList[0]} />;
};
