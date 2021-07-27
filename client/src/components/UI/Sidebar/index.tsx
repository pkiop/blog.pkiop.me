import React from 'react';
import * as S from './style';
import { ICategory } from './Category';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilter } from 'state/createStore';
import { testTagList } from 'fixture/Tag';
import { ISidebarStoreState } from 'types/store';

export interface ISidebarComponent {
  className?: string;
  categoryList: ICategory[];
}

function Sidebar({ className, categoryList }: ISidebarComponent) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: ISidebarStoreState) => state.isSidebarOpen,
  );
  const CategoryList = categoryList.map((category: ICategory) => {
    return <S.Category key={category.mainCategory.title} category={category} />;
  });
  return (
    <S.Sidebar className={className} isOpen={isSidebarOpen}>
      {CategoryList}
      <S.TagList tagList={testTagList} />
      <div className="button-wrapper">
        <S.FilterClearBtn onClick={() => dispatch(clearFilter())}>
          Clear Filter
        </S.FilterClearBtn>
      </div>
      <S.AboutMe />
      {/* <S.DonateLink /> */}
    </S.Sidebar>
  );
}

export default Sidebar;
