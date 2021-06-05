import React from 'react';

import * as S from './style';

export interface IDonateBtn {
  className?: string;
  link: string;
}

function DonateBtn({ className, link }: IDonateBtn) {
  return (
    <S.DonateBtn className={className}>
      <a href={link}>기부하기</a>
    </S.DonateBtn>
  );
}

export default DonateBtn;
