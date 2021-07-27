import React from 'react';
import Link from 'gatsby-link';
import Hamburger from 'images/hamburger.svg';
import { INav, INavButton } from 'types/headerbar';

import * as S from './style';

function Nav({ NavButtonList }: INav) {
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
      <S.DesktopNavList>{ButtonList}</S.DesktopNavList>
      <S.HamburgerImg src={Hamburger} />
    </S.Nav>
  );
}

export default Nav;
