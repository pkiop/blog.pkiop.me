import React from 'react';
import Content from './Content';
import * as S from './style';
import { useSelector } from 'react-redux';
import { ITag } from 'components/UI/ContentsList/Content/TagList/Tag';

export interface IContent {
  title: string;
  date: string;
  slug: string;
  mainCategory: string;
  subCategory: string;
  tag: ITag[];
}

export interface IContentsListComponent {
  className?: string;
  contentsList: IContent[];
}

function ContentsList({ className, contentsList }: IContentsListComponent) {
  const mainCategory: string = useSelector((state: any) => state.mainCategory);
  const subCategory: string = useSelector((state: any) => state.subCategory);
  const tag: string[] = useSelector((state: any) => state.tag);

  const ContentsListComponents = contentsList
    .sort((a: any, b: any) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return bDate.getTime() - aDate.getTime();
    })
    .filter((content: IContent) => {
      if (mainCategory === '' && subCategory === '' && tag.length === 0) {
        if (content.subCategory === 'algorithm') return false;
        return true;
      }
      if (mainCategory === '' && subCategory === '') {
        return content.tag.some((contentTag: ITag) => {
          return tag.includes(contentTag.title);
        });
      }
      const isMainCategoryEqual = content.mainCategory === mainCategory;
      const isSubCategoryEqual = content.subCategory === subCategory;
      const isContainsTag = content.tag.some((contentTag: ITag) =>
        tag.includes(contentTag.title),
      );

      if (subCategory === '') {
        if (tag.length !== 0) {
          return isMainCategoryEqual && isContainsTag;
        }
        return isMainCategoryEqual;
      }

      if (tag.length !== 0) {
        return isSubCategoryEqual && isContainsTag;
      }
      return isSubCategoryEqual;
    })
    .map((content: IContent) => {
      return <Content key={content.title} content={content} />;
    });
  return (
    <S.ContentsList className={className}>
      {ContentsListComponents}
    </S.ContentsList>
  );
}

export default ContentsList;
