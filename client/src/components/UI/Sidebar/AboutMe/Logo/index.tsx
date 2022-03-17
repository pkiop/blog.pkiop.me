import React from 'react';
import * as S from './style';

export interface IAboutMeComponent {
  className?: string;
  imgFile: any;
  alt: string;
  objectFit?: boolean;
  link: string;
  bgColor?: string;
  borderRadius?: number;
}

function TagList({
  className,
  link,
  objectFit,
  alt,
  imgFile,
  bgColor,
  borderRadius,
}: IAboutMeComponent) {
  return (
    <a className={className} href={link}>
      <S.Logo
        src={imgFile}
        objectFit={objectFit}
        alt={alt}
        bgColor={bgColor}
        borderRadius={borderRadius}
      />
    </a>
  );
}

export default TagList;
