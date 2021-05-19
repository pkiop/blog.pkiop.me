import React from 'react';

import * as S from './style';

export interface ICategory {
  mainCategory: string;
  subCategory: string[];
}

export interface ICategoryComponent {
  className?: string;
  category: ICategory;
}

function Category({ className, category }: ICategoryComponent) {
  return (
    <S.Category className={className}>
      <S.CategoryTitle>{category.mainCategory}</S.CategoryTitle>
      <S.SubCategory subCategory={category.subCategory} />
    </S.Category>
  );
}

export default Category;
