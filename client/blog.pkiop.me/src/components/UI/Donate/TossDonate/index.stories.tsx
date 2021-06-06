import React from 'react';
import TossDonate from './index';

export default {
  title: 'TossDonate',
  component: TossDonate,
};

const testData = {
  link: '#',
};

export const MainTossDonate = () => {
  return <TossDonate {...testData} />;
};
