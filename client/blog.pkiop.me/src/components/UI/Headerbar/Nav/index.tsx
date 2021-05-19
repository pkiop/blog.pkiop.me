import React from 'react';
import Link from 'gatsby-link';

import * as S from './style';

function Nav() {
  return (
    <S.Nav>
      <Link to="/">Article</Link>
      <Link to="https://pkiop.me">About</Link>
    </S.Nav>
  );
}

export default Nav;
