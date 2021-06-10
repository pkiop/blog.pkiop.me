import React from 'react';
import Amount from './index';

export default {
  title: 'TossDonate / Amount',
  component: Amount,
};

const testData = {
  amount: 1000,
  setAmount: () => {},
};

export const MainAmount = () => {
  return <Amount {...testData} />;
};
