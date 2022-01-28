import React from 'react';
import Link from 'gatsby-link';
import Hamburger from 'images/hamburger.svg';
import { INav, INavButton } from 'types/headerbar';
import { toggleSidebar } from 'state/createStore';
import { useSelector, useDispatch } from 'react-redux';
import { ISidebarStoreState } from 'types/store';

import * as S from './style';

function Nav({ NavButtonList }: INav) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: ISidebarStoreState) => state.isSidebarOpen,
  );

  const ButtonList = NavButtonList.map((NavButton: INavButton) => {
    if (NavButton.isClientRoute) {
      return (
        <Link key={NavButton.text} to={NavButton.link}>
          {NavButton.text}
        </Link>
      );
    }
    return (
      <a key={NavButton.text} href={NavButton.link}>
        {NavButton.text}
      </a>
    );
  });
  return (
    <S.Nav>
      <S.NavList isOpen={isSidebarOpen}>
        <div className="header-nav-wrapper">{ButtonList}</div>
      </S.NavList>
      <S.HamburgerImg
        onClick={() => dispatch(toggleSidebar())}
        src={Hamburger}
      />
      <S.FullScreenDimmed
        isOpen={isSidebarOpen}
        onClick={() => dispatch(toggleSidebar())}
      ></S.FullScreenDimmed>
    </S.Nav>
  );
}

export default Nav;
