import React from 'react';
import { useDispatch } from 'react-redux';
import { setSubCategory } from 'state/createStore';
import * as S from './style';

export type ISubCategory = string[];
export interface ISubCategoryComponent {
  className?: string;
  subCategory: ISubCategory;
}

function SubCategory({ className, subCategory }: ISubCategoryComponent) {
  const dispatch = useDispatch();


  const subCategoryComponents = subCategory.map((categoryName: string) => {
    const setCategory = () => {
      dispatch(setSubCategory(categoryName));
    }
    return <div onClick={setCategory} key={categoryName}>{categoryName}</div>;
  });
  return (
    <S.SubCategory className={className}>{subCategoryComponents}</S.SubCategory>
  );
}

export default SubCategory;
