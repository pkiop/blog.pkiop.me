import React from 'react';
import * as S from './style';
import { IContent } from 'components/UI/ContentsList';
import TagList from './TagList';
import { navigate } from 'gatsby-link';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'types/store';
import { Link } from 'gatsby';

export interface IContentsComponent {
  className?: string;
  content: IContent;
}

function Content({ className, content }: IContentsComponent) {
  const isDarkMode = useSelector((state: GlobalStoreState) => state.isDarkMode);
  return (
    <Link to={content.slug} style={{ width: '100%' }}>
      <S.Content className={className} isDarkMode={isDarkMode}>
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
    </Link>
  );
}

export default Content;
