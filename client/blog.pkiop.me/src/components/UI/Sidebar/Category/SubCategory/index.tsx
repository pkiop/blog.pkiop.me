import React from 'react';

import * as S from './style';

export type ISubCategory = string[];
export interface ISubCategoryComponent {
  className?: string;
  subCategory: ISubCategory;
}

function SubCategory({ className, subCategory }: ISubCategoryComponent) {
  const subCategoryComponents = subCategory.map((categoryName: string) => {
    return <div key={categoryName}>{categoryName}</div>;
  });
  return (
    <S.SubCategory className={className}>{subCategoryComponents}</S.SubCategory>
  );
}

export default SubCategory;
