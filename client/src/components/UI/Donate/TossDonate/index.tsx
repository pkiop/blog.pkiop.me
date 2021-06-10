import React from 'react';
import * as S from './style';
export interface ITossDonateComponent {
  className?: string;
  amount: number;
  link: string;
  setAmount: any;
}

function TossDonate({
  className,
  amount,
  link,
  setAmount,
}: ITossDonateComponent) {
  return (
    <S.TossDonate className={className}>
      <S.AmountInput amount={amount} setAmount={setAmount} />
      <S.SubmitWrapper>
        <S.Amount amount={amount} />
        <S.DonateBtn link={link} />
      </S.SubmitWrapper>
    </S.TossDonate>
  );
}

export default TossDonate;
