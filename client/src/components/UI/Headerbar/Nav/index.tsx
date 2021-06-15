import React from 'react';
import Link from 'gatsby-link';

import * as S from './style';

function Nav() {
  return (
    <S.Nav>
      <Link to="/">Article</Link>
      <a href="https://pkiop.me">About</a>
    </S.Nav>
  );
}

export default Nav;
