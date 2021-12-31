import axios from 'axios';

// TODO: 이래도 되는데 왜 gql 쓰는거지..?
export const getArticles = async () => {
  const response = await axios.post('/graphql', {
    query: `query {
        article(filter: "${new Date()}") {
          title
          mainCategory {
            title
          }
          subCategory {
            title
          }
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

export const getArticleBySlug = async (slug: string) => {
  const response = await axios.post('/graphql', {
    query: `query {
        getArticle(filter: "${slug}") {
          title
          mainCategory {
            title
          }
          subCategory {
            title
          }
          slug
          tags
          contents
          updateAt 
          readTime
        }
      }`,
  });
  return {
    ...response.data.data.getArticle,
    updateAt: new Date(response.data.data.getArticle.updateAt),
  };
};

export const getCategories = async () => {
  const response = await axios.post('/graphql', {
    query: `query {
        getCategories {
          id
          title
          classification
          emoji 
        }
      }`,
  });
  return response.data.data.article;
};

export default {};
