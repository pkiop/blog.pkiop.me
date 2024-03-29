import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTag } from 'state/createStore';
import { useSelector } from 'react-redux';
import { ITag } from './Tag';
import * as S from './style';

export type ITagList = ITag[];
export interface ITagListComponent {
  className?: string;
  tagList: ITagList;
}

function TagList({ className, tagList }: ITagListComponent) {
  const dispatch = useDispatch();
  const selectedTag: [string] = useSelector((state: any) => state.tag);
  const TagListComponent = tagList.map((tag: ITag) => {
    const onTagTitle = () => {
      dispatch(toggleTag(tag.title));
    };
    return (
      <S.Tag
        onClick={onTagTitle}
        key={tag.title}
        tag={tag}
        isSelected={selectedTag.includes(tag.title)}
      />
    );
  });
  return <S.TagList className={className}>{TagListComponent}</S.TagList>;
}

export default TagList;
