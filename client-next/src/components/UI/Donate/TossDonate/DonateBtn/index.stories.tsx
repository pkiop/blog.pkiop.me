import React from 'react';
import DonateBtn from './index';

export default {
  title: 'TossDonate / DonateBtn',
  component: DonateBtn,
};

const testData = {
  link: '#',
};

export const MainDonateBtn = () => {
  return <DonateBtn {...testData} />;
};
