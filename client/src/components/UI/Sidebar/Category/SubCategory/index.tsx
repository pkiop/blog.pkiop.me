import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMainCategory, setSubCategory } from 'state/createStore';
import { IMainCategory } from '..';
import * as S from './style';

export interface ISubCategory {
  title: string;
  count: number;
}
export interface ISubCategoryComponent {
  className?: string;
  subCategory: ISubCategory[];
  mainCategory: IMainCategory;
}

function SubCategory({ className, subCategory, mainCategory }: ISubCategoryComponent) {
  const dispatch = useDispatch();
  const selectedSubCategory: string[] = useSelector(
    (state: any) => state.subCategory,
  );
  const selectedMainCategory: string = useSelector(
    (state: any) => state.mainCategory,
  );
  const subCategoryComponents = subCategory.map((category: ISubCategory) => {
    const setCategory = () => {
      dispatch(setMainCategory(mainCategory.title));
      dispatch(setSubCategory(category.title));
    };
    const isSelected = selectedMainCategory.includes(mainCategory.title) && selectedSubCategory.includes(category.title);
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
