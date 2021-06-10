import React from 'react';
import * as S from './style';
import { IContent } from 'components/UI/ContentsList';
import TagList from './TagList';
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
      <S.SubInfo>
        <div className="category-date">
          <div className="category">
            {content.mainCategory} / {content.subCategory}
          </div>
          <div className="date">{content.date}</div>
        </div>
        <TagList tagList={content.tag} />
      </S.SubInfo>
    </S.Content>
  );
}

export default Content;
