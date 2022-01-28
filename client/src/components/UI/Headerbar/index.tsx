import React from 'react';
import Nav from './Nav';

import * as S from './style';
import { IHeaderbar } from 'types/headerbar';

function Headerbar({ nav }: IHeaderbar) {
  return (
    <S.HeaderBar>
      <a href="/">PKIOP BLOG</a>
      <Nav NavButtonList={nav.NavButtonList} />
    </S.HeaderBar>
  );
}

export default Headerbar;
