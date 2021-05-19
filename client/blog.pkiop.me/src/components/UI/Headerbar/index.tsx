import React from 'react';
import logo from 'images/logo.png';
import Nav from './Nav';

import * as S from './style';

function Headerbar() {
  return (
    <S.HeaderBar>
      <a href="/">
        <S.Logo src={logo} alt="logo" />
      </a>
      <Nav />
    </S.HeaderBar>
  );
}

export default Headerbar;
