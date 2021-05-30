import React from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import { setMainCategory } from 'state/createStore';

export interface ICategory {
  mainCategory: string;
  emoji: string;
  subCategory: string[];
}

export interface ICategoryComponent {
  className?: string;
  category: ICategory;
}

function Category({ className, category }: ICategoryComponent) {
  const dispatch = useDispatch();

  const setCategory = () => {
    dispatch(setMainCategory(category.mainCategory));
  };

  return (
    <S.Category className={className}>
      <S.CategoryTitle onClick={setCategory}>
        {category.emoji} {category.mainCategory}
      </S.CategoryTitle>
      <S.SubCategory subCategory={category.subCategory} />
    </S.Category>
  );
}

export default Category;
