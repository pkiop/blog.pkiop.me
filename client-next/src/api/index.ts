import axios from 'axios';

// TODO: 이래도 되는데 왜 gql 쓰는거지..?
export const getArticles = async () => {
  const response = await axios.post('/graphql', {
    query: `query {
        article {
          title
          mainCategory {
            title
          }
          subCategory {
            title
          }
          slug
          tags
        }
      }`,
  });
  return response.data.data.article;
};

export default {};
