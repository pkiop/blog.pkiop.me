import React from 'react';
import logo from 'images/logo.png';
import Nav from './Nav';

import * as S from './style';

function Headerbar() {
  return (
    <S.HeaderBar>
      <a href="/">
        PKIOP BLOG
      </a>
      <Nav />
    </S.HeaderBar>
  );
}

export default Headerbar;
