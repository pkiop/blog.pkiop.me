import React from 'react';
import AmountInput from './index';

export default {
  title: 'TossDonate / AmountInput',
  component: AmountInput,
};

const testData = {
  amount: 1000,
  setAmount: () => {},
};

export const MainAmountInput = () => {
  return <AmountInput {...testData} />;
};
