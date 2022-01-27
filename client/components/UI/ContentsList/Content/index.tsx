import type { IContent } from 'types/content.interface';
import { useNavigate } from 'react-router-dom';
import { DateUtil } from '@utils/index';
import * as S from './style';
import TagList from './TagList';

export interface IContentsComponent {
  className?: string;
  content: IContent;
}

const Content = ({ className, content }: IContentsComponent) => {
  const navigate = useNavigate();
  return (
    <S.Content
      onClick={() => navigate(`${content.slug}`)}
      className={className}
    >
      <div>{content.title}</div>
      <S.SubInfo>
        <div className="category-date">
          <div className="category">
            {content.mainCategory.title}/{content.subCategory.title}
          </div>
          <div className="date">
            {DateUtil.getYMD(new Date(content.updateAt))}
          </div>
        </div>
        <TagList tagList={content.tags} />
      </S.SubInfo>
    </S.Content>
  );
};

export default Content;
