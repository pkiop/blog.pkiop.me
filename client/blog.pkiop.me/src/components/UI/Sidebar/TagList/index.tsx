import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTag } from 'state/createStore';
import * as S from './style';

export type ITagList = string[];
export interface ITagListComponent {
  className?: string;
  tagList: ITagList;
}

function TagList({ className, tagList }: ITagListComponent) {
  const dispatch = useDispatch();

  const TagListComponent = tagList.map((tagTitle: string) => {
    const onTagTitle = () => {
      dispatch(toggleTag(tagTitle));
    }
    return <div onClick={onTagTitle} key={tagTitle}>{tagTitle}</div>
  })
  return (
    <S.TagList className={className}>
      {TagListComponent}
    </S.TagList>
  );
}

export default TagList;
