import { useEffect, useState } from 'react';
import Article from '../Article';
import { Content } from '../../types/content.interface';
import axios from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useQuery } from 'react-query';

const getArticles = async () => {
  const response = await axios.post('/graphql', {
    query: `query {
        article {
          title
          mainCategory {
            id
            title
            classification
          }
          subCategory {
            id
            title
            classification
          }
          summary
          slug
          tags
          contents
          updateAt
          readTime
        }
      }`,
  });
  return response.data.data.article;
};

const articleState = atom<Content>({
  key: 'articleState',
  default: {
    title: 'none',
    slug: '/bs',
    contents: '<h1>test</h1>',
    summary: 'none',
    mainCategoryId: 1,
    subCategoryId: 1,
    readTime: 2,
  },
});

const ArticleList = () => {
  const { isLoading, error, data } = useQuery('articles', () => getArticles());

  const articles = data;
  const [article, setArticle] = useRecoilState(articleState);

  if (isLoading) return <>loading</>;
  if (error) return <>error : {JSON.stringify(error)}</>;

  const Articles = articles.map((article: Content) => {
    return (
      <Article
        key={article.title}
        onClick={() => setArticle(article)}
        article={article}
      />
    );
  });
  return (
    <>
      <div className='border-2 border-rose-500 p-5'>{Articles}</div>
      <div>
        {article.title !== 'none' && (
          <Article key={article.title} onClick={() => {}} article={article} />
        )}
      </div>
    </>
  );
};

export default ArticleList;
