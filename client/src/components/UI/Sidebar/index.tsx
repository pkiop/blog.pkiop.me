import React from 'react';
import * as S from './style';
import { ICategory } from './Category';
import { useSelector, useDispatch } from 'react-redux';
import { clearFilter } from 'state/createStore';
import { testTagList } from 'fixture/Tag';
import { ISidebarStoreState } from 'types/store';
import { colors } from 'styles/theme';

const { sidebar: sidebarColor } = colors;

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
      <div className="button-wrapper">
        <S.FilterClearBtn onClick={() => dispatch(clearFilter())}>
          🔄
        </S.FilterClearBtn>
      </div>
      <S.CategoryWrapper>{CategoryList}</S.CategoryWrapper>
      <S.TagList tagList={testTagList} />

      <S.AboutMe />
      {/* <S.DonateLink /> */}
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=488028&template=carousel&trackingCode=AF1679783&subId=&width=680&height=140"
        width="240"
        height="150"
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
      ></iframe>
      <a
        style={{
          marginTop: '1.4rem',
          color: sidebarColor.category.color_link,
          textAlign: 'center',
        }}
        href="https://coupa.ng/b5eXs7"
      >
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, <br />
        이에 따른 일정액의 수수료를 제공받습니다.
      </a>
    </S.Sidebar>
  );
}

export default Sidebar;
