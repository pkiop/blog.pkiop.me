import type { IContent } from '@components/UI/ContentsList';
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
          {content.mainCategory}/{content.subCategory}
        </div>
        <div className="date">{content.date}</div>
      </div>
      <TagList tagList={content.tag} />
    </S.SubInfo>
  </S.Content>
);

export default Content;
