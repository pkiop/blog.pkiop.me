import React from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'types/store';

function Titlebox({ title, date, readTime, className }: any) {
  const isDarkMode = useSelector((state: GlobalStoreState) => state.isDarkMode);
  return (
    <S.Titlebox className={className} isDarkMode={isDarkMode}>
      <h1>{title}</h1>
      <S.Wrapper>
        <div>Posted {date}</div>
        <S.ReadTime readTime={readTime} />
      </S.Wrapper>
    </S.Titlebox>
  );
}

export default Titlebox;
