import React from 'react';
import * as S from './style';

const Titlebox = ({ title, date, readTime, className }: any) => (
  <S.Titlebox className={className}>
    <h1>{title}</h1>
    <S.Wrapper>
      <div>Posted {date}</div>
      <S.ReadTime readTime={readTime} />
    </S.Wrapper>
  </S.Titlebox>
);

export default Titlebox;
