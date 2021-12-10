import type { IContent } from 'types/content.interface';
import * as S from './style';
import TagList from './TagList';

export interface IContentsComponent {
  className?: string;
  content: IContent;
}

const Content = ({ className, content }: IContentsComponent) => (
  <S.Content onClick={() => alert(content.slug)} className={className}>
    <div>{content.title}</div>
    <S.SubInfo>
      <div className="category-date">
        <div className="category">
          {content.mainCategory.title}/{content.subCategory.title}
        </div>
        <div className="date">{content.date}</div>
      </div>
      <TagList tagList={content.tags} />
    </S.SubInfo>
  </S.Content>
);

export default Content;
