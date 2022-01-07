import type { ITag } from 'types/tag.interface';
import * as S from './style';

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
    textColor={tag.fontColor}
  >
    {tag.title}
  </S.Tag>
);

export default Tag;
