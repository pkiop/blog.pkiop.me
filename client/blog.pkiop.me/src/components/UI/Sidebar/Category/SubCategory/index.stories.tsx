import React from 'react';
import SubCategory from './index';
import { subCategoryList1 } from 'fixture/Category';

export default {
  title: 'Sidebar / Category / SubCategory',
  component: SubCategory,
};

export const MainSubCategory = () => {
  return <SubCategory subCategory={subCategoryList1} />;
};
