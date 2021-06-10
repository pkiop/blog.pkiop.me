import React from 'react';
import * as S from './style';

export interface ITag {
  title: string;
  color: string;
  textColor: string;
}

export interface ITagComponent {
  tag: ITag;
  onClick: any;
  className?: string;
}

function Tag({ className, onClick, tag }: ITagComponent) {
  console.log('mytag : ', tag.textColor);
  return (
    <S.Tag
      className={className}
      onClick={onClick}
      color={tag.color}
      textColor={tag.textColor}
    >
      {tag.title}
    </S.Tag>
  );
}

export default Tag;
