import React from 'react';
import SubCategory from './index';
import { subCategoryList } from 'fixture/Category';

export default {
  title: 'Sidebar / Category / SubCategory',
  component: SubCategory,
};

export const MainSubCategory = () => {
  return <SubCategory subCategory={subCategoryList} />;
};
