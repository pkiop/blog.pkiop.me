import React from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';
import { setMainCategory } from 'state/createStore';
import { navigate } from 'gatsby';
import { ISubCategory } from './SubCategory';

export interface IMainCategory {
  title: string;
  count: number;
}
export interface ICategory {
  mainCategory: IMainCategory;
  emoji: string;
  subCategory: ISubCategory[];
}

export interface ICategoryComponent {
  className?: string;
  category: ICategory;
}

function Category({ className, category }: ICategoryComponent) {
  const dispatch = useDispatch();

  const setCategory = () => {
    dispatch(setMainCategory(category.mainCategory.title));
  };

  return (
    <S.Category
      className={className}
      onClick={() => {
        navigate('/');
      }}
    >
      <S.CategoryTitle onClick={setCategory}>
        {category.emoji} {category.mainCategory.title}
        {category.mainCategory.count ? `(${category.mainCategory.count})` : ''}
      </S.CategoryTitle>
      <S.SubCategory subCategory={category.subCategory} />
    </S.Category>
  );
}

export default Category;
