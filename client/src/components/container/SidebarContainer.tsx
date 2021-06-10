import React from 'react';
import { testCategoryList } from 'fixture/Category';
import Sidebar from 'components/UI/Sidebar';

function SidebarContainer() {
  const data = testCategoryList;
  return <Sidebar categoryList={data} />;
}

export default SidebarContainer;
