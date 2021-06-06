import React, { useState } from 'react';
import * as S from './style';

export interface IAmountInput {
  className?: string;
  amount: number;
  setAmount: any;
}

function AmountInput({ className, amount, setAmount }: IAmountInput) {
  const [tempAmount, setTempAmount] = useState<number>(amount);
  const onChange = (e: any) => {
    setTempAmount(e.target.value);
  };
  return (
    <S.AmountInput>
      <S.Input
        className={className}
        type="number"
        value={tempAmount}
        onChange={onChange}
      />
      ;<S.Submit onClick={() => setAmount(tempAmount)}>금액 입력</S.Submit>
    </S.AmountInput>
  );
}

export default React.memo(AmountInput);
