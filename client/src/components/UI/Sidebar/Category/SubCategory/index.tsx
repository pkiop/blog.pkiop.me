import React from 'react';
import { useDispatch } from 'react-redux';
import { setSubCategory } from 'state/createStore';
import * as S from './style';

export interface ISubCategory {
  title: string;
  count: number;
}
export interface ISubCategoryComponent {
  className?: string;
  subCategory: ISubCategory[];
}

function SubCategory({ className, subCategory }: ISubCategoryComponent) {
  const dispatch = useDispatch();
  const subCategoryComponents = subCategory.map((category: ISubCategory) => {
    const setCategory = () => {
      dispatch(setSubCategory(category.title));
    };
    return (
      <div onClick={setCategory} key={category.title}>
        {category.title}
        {category.count ? `(${category.count})` : ''}
      </div>
    );
  });
  return (
    <S.SubCategory className={className}>{subCategoryComponents}</S.SubCategory>
  );
}

export default SubCategory;
