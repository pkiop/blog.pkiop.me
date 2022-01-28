import React from 'react';
import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setMainCategory } from 'state/createStore';
import { navigate } from 'gatsby-link';
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
  const mainCategory: string = useSelector((state: any) => state.mainCategory);

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
      <S.CategoryTitle<any>
        onClick={setCategory}
        isSelected={mainCategory === category.mainCategory.title}
      >
        {category.emoji} {category.mainCategory.title}
        <S.Count>
          {category.mainCategory.count
            ? `(${category.mainCategory.count})`
            : ''}
        </S.Count>
      </S.CategoryTitle>
      <S.SubCategory
        mainCategory={category.mainCategory}
        subCategory={category.subCategory}
      />
    </S.Category>
  );
}

export default Category;
