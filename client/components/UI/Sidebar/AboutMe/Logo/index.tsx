import * as S from './style';

export interface IAboutMeComponent {
  className?: string;
  imgFile: any;
  alt: string;
  objectFit?: boolean;
  link: string;
}

const TagList = ({
  className,
  link,
  objectFit,
  alt,
  imgFile,
}: IAboutMeComponent) => (
  <a className={className} href={link}>
    <S.Logo src={imgFile} objectFit={objectFit} alt={alt} />
  </a>
);

export default TagList;
