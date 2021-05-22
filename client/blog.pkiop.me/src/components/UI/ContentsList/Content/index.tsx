import React from 'react';
import { navigate } from '@reach/router';
import * as S from './style';

export interface IContent {
  title: string;
  date: string;
  slug: string;
}

export interface IContentsComponent {
  className?: string;
  content: IContent;
}

function Content({ className, content }: IContentsComponent) {
  return (
    <S.Content
      onClick={() => (window.location.href = content.slug)}
      className={className}
    >
      <div>{content.title}</div>
      <div>{content.date}</div>
    </S.Content>
  );
}

export default Content;
