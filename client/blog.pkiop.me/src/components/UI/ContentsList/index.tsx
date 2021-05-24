import React from 'react';
import Content from './Content';
import * as S from './style';
import { useSelector } from 'react-redux';

export interface IContent {
  title: string;
  date: string;
  slug: string;
  mainCategory: string;
  subCategory: string;
  tag: string[];
}

export interface IContentsListComponent {
  className?: string;
  contentsList: IContent[];
}

function ContentsList({ className, contentsList }: IContentsListComponent) {
  const mainCategory: string = useSelector((state: any) => state.mainCategory);
  const subCategory: string = useSelector((state: any) => state.subCategory);
  const tag: string[] = useSelector((state: any) => state.tag);

  const ContentsListComponents = contentsList.filter((content: IContent) => {
    if (mainCategory === '' && subCategory === '' && tag.length === 0) {
      return true;
    }
    const isMainCategoryEqual = content.mainCategory === mainCategory;
    const isSubCategoryEqual = content.subCategory === subCategory;
    const isContainsTag = content.tag.some((contentTag: string) => tag.includes(contentTag));

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
  }).map((content: IContent) => {
    return <Content key={content.title} content={content} />;
  });
  return (
    <S.ContentsList className={className}>
      {ContentsListComponents}
    </S.ContentsList>
  );
}

export default ContentsList;
