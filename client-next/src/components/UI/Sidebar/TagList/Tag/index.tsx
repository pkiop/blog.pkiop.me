import type { ITag } from 'types/tag.interface';
import * as S from './style';

export interface ITagComponent {
  tag: ITag;
  onClick: any;
  isSelected: boolean;
  className?: string;
}

const Tag = ({ className, onClick, tag, isSelected }: ITagComponent) => (
  <S.Tag<any>
    className={className}
    onClick={onClick}
    color={tag.color}
    textColor={tag.textColor}
    isSelected={isSelected}
  >
    {tag.title}
  </S.Tag>
);

export default Tag;
