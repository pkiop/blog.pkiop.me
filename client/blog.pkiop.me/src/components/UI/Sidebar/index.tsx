import React from 'react';
import * as S from './style';
import { ICategory } from './Category';

export interface ISidebarComponent {
  className?: string;
  categoryList: ICategory[];
}

function Sidebar({ className, categoryList }: ISidebarComponent) {
  const CategoryList = categoryList.map((category: ICategory) => {
    return <S.Category key={category.mainCategory} category={category} />;
  });
  return <S.Sidebar>{CategoryList}</S.Sidebar>;
}

export default Sidebar;
