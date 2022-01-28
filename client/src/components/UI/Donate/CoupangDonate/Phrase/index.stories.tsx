import React from 'react';
import Phrase from './index';

export default {
  title: 'CoupangDonate / Phrase',
  component: Phrase,
};

const testData = {
  text: '파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있음',
};
export const MainPhrase = () => {
  return <Phrase {...testData} />;
};
