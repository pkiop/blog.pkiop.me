import React from 'react';
import Link from 'gatsby-link';
import Hamburger from 'images/hamburger.svg';
import { INav, INavButton } from 'types/headerbar';
import { toggleSidebar, toggleDarkMode } from 'state/createStore';
import { useSelector, useDispatch } from 'react-redux';
import { ISidebarStoreState, GlobalStoreState } from 'types/store';

import * as S from './style';

function Nav({ NavButtonList }: INav) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: ISidebarStoreState) => state.isSidebarOpen,
  );
  const isDarkMode = useSelector((state: GlobalStoreState) => state.isDarkMode);

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
      <S.NavList isOpen={isSidebarOpen} isDarkMode={isDarkMode}>
        <div className="header-nav-wrapper">
          {ButtonList}{' '}
          <div
            className="dark-mode"
            onClick={() => dispatch(toggleDarkMode())}
          ></div>
        </div>
      </S.NavList>
      <S.HamburgerImg
        onClick={() => dispatch(toggleSidebar())}
        src={Hamburger}
      />
      <S.FullScreenDimmed
        isOpen={isSidebarOpen}
        isDarkMode={isDarkMode}
        onClick={() => dispatch(toggleSidebar())}
      ></S.FullScreenDimmed>
    </S.Nav>
  );
}

export default Nav;
