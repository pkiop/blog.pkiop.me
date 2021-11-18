import React from 'react';
import * as S from './style';

function ReadTime({ readTime, className }: any) {
  return <S.ReadTime className={className}>{readTime} min read</S.ReadTime>;
}

export default ReadTime;
