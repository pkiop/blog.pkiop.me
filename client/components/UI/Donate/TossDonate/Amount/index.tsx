import React, { useState } from 'react';
import * as S from './style';

export interface IAmount {
  className?: string;
  amount: number;
}

function Amount({ className, amount }: IAmount) {
  return (
    <S.Amount className={className}>
      {amount}원을 송금하려면 아래 Toss 버튼을 누르세요.
    </S.Amount>
  );
}

export default React.memo(Amount);
