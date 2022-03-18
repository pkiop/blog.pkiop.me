import React from 'react';
import Nav from './Nav';

import * as S from './style';
import { IHeaderbar } from 'types/headerbar';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'types/store';

function Headerbar({ nav }: IHeaderbar) {
  const isDarkMode = useSelector((state: GlobalStoreState) => state.isDarkMode);
  return (
    <S.HeaderBar isDarkMode={isDarkMode}>
      <a href="/">PKIOP BLOG</a>
      <Nav NavButtonList={nav.NavButtonList} />
    </S.HeaderBar>
  );
}

export default Headerbar;
