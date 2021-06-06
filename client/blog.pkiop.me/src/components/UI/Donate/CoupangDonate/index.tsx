import React from 'react';
import * as S from './style';

const fairPhrase = '파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있음';
function CoupangDonate() {
  return (
    <S.CoupangDonate>
      <S.SlideBanner />
      <S.Phrase text={fairPhrase} />
    </S.CoupangDonate>
  );
}

export default CoupangDonate;
