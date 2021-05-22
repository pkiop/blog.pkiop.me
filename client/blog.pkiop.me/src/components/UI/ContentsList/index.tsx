import React from 'react';
import Content from './Content';
import * as S from './style';

export interface IContent {
  title: string;
  date: string;
  slug: string;
}

export interface IContentsListComponent {
  className?: string;
  contentsList: IContent[];
}

function ContentsList({ className, contentsList }: IContentsListComponent) {
  const ContentsListComponents = contentsList.map((content: IContent) => {
    return <Content key={content.title} content={content} />;
  });
  return (
    <S.ContentsList className={className}>
      {ContentsListComponents}
    </S.ContentsList>
  );
}

export default ContentsList;
