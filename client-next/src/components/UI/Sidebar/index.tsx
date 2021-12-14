import { useSelector, useDispatch } from 'react-redux';
import { clearFilter } from '@state/createStore';
import { testTagList } from '@fixture/Tag';
import { SidebarStoreState } from 'types/store';
import type { ICategory } from 'types/category.interface';
import * as S from './style';

export interface ISidebarComponent {
  className?: string;
  categoryList: ICategory[];
}

const Sidebar = ({ className, categoryList }: ISidebarComponent) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: SidebarStoreState) => state.isSidebarOpen,
  );
  const CategoryList = categoryList.map((category: ICategory) => (
    <S.Category key={category.mainCategory.title} category={category} />
  ));
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
        title="ads"
        src="https://ads-partners.coupang.com/widgets.html?id=488028&template=carousel&trackingCode=AF1679783&subId=&width=680&height=140"
        width="210"
        height="150"
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
      />
      <a style={{ marginTop: '1.4rem' }} href="https://coupa.ng/b5eXs7">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
        제공받습니다.
      </a>
    </S.Sidebar>
  );
};

export default Sidebar;
