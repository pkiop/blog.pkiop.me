import React from 'react';
import * as S from './style';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'types/store';

function ReadTime({ readTime, className }: any) {
  const isDarkMode = useSelector((state: GlobalStoreState) => state.isDarkMode);
  return (
    <S.ReadTime className={className} isDarkMode={isDarkMode}>
      {readTime} min read
    </S.ReadTime>
  );
}

export default ReadTime;
