import React from 'react';
import * as S from './style';

function Titlebox({ title, date, className }: any) {
  return (
    <S.Titlebox className={className}>
      <h1>{title}</h1>
      <h2>{date}</h2>
    </S.Titlebox>
  );
}

export default Titlebox;
