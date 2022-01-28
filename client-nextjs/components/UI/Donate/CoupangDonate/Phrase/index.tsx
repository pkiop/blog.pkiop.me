import React from 'react';

import * as S from './style';

export interface IPhrase {
  text: string;
  className?: string;
}

function Phrase({ text, className }: IPhrase) {
  return <S.Phrase className={className}>{text}</S.Phrase>;
}

export default Phrase;
