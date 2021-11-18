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

const Tag = ({ className, onClick, tag }: ITagComponent) => (
  <S.Tag<any>
    className={className}
    onClick={onClick}
    color={tag.color}
    textColor={tag.textColor}
  >
    {tag.title}
  </S.Tag>
);

export default Tag;
