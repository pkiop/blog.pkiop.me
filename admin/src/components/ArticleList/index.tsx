import { useEffect, useState } from 'react';
import Article from '../Article';
import { Content } from '../../types/content.interface';
import axios from 'axios';

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

const ArticleList = () => {
  const [articles, setArticles] = useState<any>(null);

  const fetchData = async () => {
    const data = await getArticles();
    setArticles(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!articles) return <>loading</>;
  const Articles = articles.map((article: Content) => {
    return <Article key={article.title} article={article} />;
  });
  return <div className='border-2 border-rose-500 p-5'>{Articles}</div>;
};

export default ArticleList;
