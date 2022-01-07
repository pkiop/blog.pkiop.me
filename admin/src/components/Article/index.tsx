import type { Content } from '../../types/content.interface';

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
    </div>
  );
};

export default ArticleList;
