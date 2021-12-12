import React from 'react';
import * as S from './style';

const ReadTime = ({ readTime, className }: any) => (
  <S.ReadTime className={className}>{readTime} min read</S.ReadTime>
);

export default ReadTime;
