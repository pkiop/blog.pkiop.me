import React from 'react';
import * as S from './style';

function Titlebox({ title, date, readTime, className }: any) {
  return (
    <S.Titlebox className={className}>
      <h1>{title}</h1>
      <S.Wrapper>
        <div>{date}</div>
        <S.ReadTime readTime={readTime} />
      </S.Wrapper>
    </S.Titlebox>
  );
}

export default Titlebox;
