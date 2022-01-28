import React from 'react';
import CoupangLogo from 'images/coupanglogo.png';

import * as S from './style';

function CoupangBtn() {
  return (
    <S.CoupangBtn
      src={CoupangLogo}
      onClick={() => (window.location.href = 'https://coupa.ng/b05gUK')}
    />
  );
}

export default CoupangBtn;
