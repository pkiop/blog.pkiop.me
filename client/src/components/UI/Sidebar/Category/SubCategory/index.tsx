import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const selectedSubCategory: string[] = useSelector(
    (state: any) => state.subCategory,
  );
  const subCategoryComponents = subCategory.map((category: ISubCategory) => {
    const setCategory = () => {
      dispatch(setSubCategory(category.title));
    };
    const isSelected = selectedSubCategory.includes(category.title);
    return (
      <S.SubCategoryComponent
        onClick={setCategory}
        key={category.title}
        isSelected={isSelected}
      >
        {category.title}
        {category.count ? `(${category.count})` : ''}
      </S.SubCategoryComponent>
    );
  });
  return (
    <S.SubCategory className={className}>{subCategoryComponents}</S.SubCategory>
  );
}

export default SubCategory;
