import React from 'react';
import * as S from './style';

export interface IContent {
  title: string;
  article: string;
}

export interface IContentsListComponent {
  className?: string;
  contentsList: IContent[];
}

function ContentsList({ className, contentsList }: IContentsListComponent) {
  const ContentsListComponents = contentsList.map((content: IContent) => {
    return (
      <div>
        {content.title} {content.article}
      </div>
    );
  });
  return (
    <S.ContentsList className={className}>
      {ContentsListComponents}
    </S.ContentsList>
  );
}

export default ContentsList;
