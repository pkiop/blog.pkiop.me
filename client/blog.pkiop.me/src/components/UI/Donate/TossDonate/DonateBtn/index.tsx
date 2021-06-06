import React from 'react';

import * as S from './style';
import TossLogo from 'images/tosslogo.png';

export interface IDonateBtn {
  className?: string;
  link: string;
}

function DonateBtn({ className, link }: IDonateBtn) {
  const onClick = () => {
    window.location.href = link;
  };
  return (
    <S.DonateBtn className={className}>
      <S.Img src={TossLogo} onClick={onClick} />
    </S.DonateBtn>
  );
}

export default DonateBtn;
