import React from 'react';
import * as S from './style';

export interface IAboutMeComponent {
  className?: string;
  imgFile: any;
  alt: string;
  objectFit?: boolean;
  link: string;
}

function TagList({
  className,
  link,
  objectFit,
  alt,
  imgFile,
}: IAboutMeComponent) {
  return (
    <a className={className} href={link}>
      <S.Logo src={imgFile} objectFit={objectFit} alt={alt} />
    </a>
  );
}

export default TagList;
