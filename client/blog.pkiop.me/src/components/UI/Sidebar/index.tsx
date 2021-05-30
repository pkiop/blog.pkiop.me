import React from 'react';
import * as S from './style';
import { ICategory } from './Category';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilter } from 'state/createStore';
import { testTagList } from 'fixture/Tag';

export interface ISidebarComponent {
  className?: string;
  categoryList: ICategory[];
}

function Sidebar({ className, categoryList }: ISidebarComponent) {
  const mainCategory: string = useSelector((state: any) => state.mainCategory);
  const subCategory: string = useSelector((state: any) => state.subCategory);
  const tag: string[] = useSelector((state: any) => state.tag);
  const dispatch = useDispatch();

  const CategoryList = categoryList.map((category: ICategory) => {
    return <S.Category key={category.mainCategory} category={category} />;
  });
  return (
    <S.Sidebar className={className}>
      {CategoryList}
      <S.TagList tagList={testTagList} />
      <button onClick={() => dispatch(clearFilter())}>필터 초기화</button>
    </S.Sidebar>
  );
}

export default Sidebar;
