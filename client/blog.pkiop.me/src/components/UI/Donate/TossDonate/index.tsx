import React from 'react';
import * as S from './style';
export interface ITossDonateComponent {
  className?: string;
  link: string;
}

function TossDonate({ className, link }: ITossDonateComponent) {
  return (
    <S.TossDonate className={className}>
      <S.DonateBtn link={link} />
    </S.TossDonate>
  );
}

export default TossDonate;
