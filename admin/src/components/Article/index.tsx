import type { Content } from '../../types/content.interface';
import { Tag } from '../../types/tag.interface';

const ArticleList = ({
  article,
  onClick,
}: {
  article: Content;
  onClick: any;
}) => {
  return (
    <div onClick={onClick}>
      <div className='text-4xl'>{article.title}</div>
      <div>{article.summary}</div>
      <div>{article.mainCategoryId}</div>
      <div>{article.subCategoryId}</div>
      <div>{article.slug}</div>
      <div>{article.readTime}</div>
      <div style={{ display: 'flex' }}>
        {article.tags?.map((tag: Tag) => {
          return (
            <div
              key={tag.title}
              style={{ color: tag.fontColor, backgroundColor: tag.color }}
            >
              {tag.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArticleList;
