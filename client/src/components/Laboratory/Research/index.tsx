import React from 'react';
import * as S from './style';

export interface ResearchProps {
  className?: string;
}

function Research({ className }: ResearchProps) {
  return <S.Research className={className}>research</S.Research>;
}

export default Research;
