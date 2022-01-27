import axios from 'axios';
import { ContentLabel } from 'types/content.interface';

export const getArticleLabels = async () => {
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
          updateAt
          tags {
            title
            color
            fontColor
          }
        }
      }`,
  });
  return response.data.data.article.sort(
    (articleA: ContentLabel, articleB: ContentLabel) => {
      const diff =
        new Date(articleB.updateAt).getTime() -
        new Date(articleA.updateAt).getTime();
      return diff;
    },
  );
};
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
          tags {
            title
            color
            fontColor
          }
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
          tags {
            title
            color
            fontColor
          }
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
          subCategories {
            id
            title
            classification
            emoji
          }
        }
      }`,
  });
  return response.data.data.getCategories;
};

export const getTags = async () => {
  const response = await axios.post('/graphql', {
    query: `query {
        getTags {
          id
          title
          fontColor
          color
        }
      }`,
  });
  return response.data.data.getTags;
};

export default {};
