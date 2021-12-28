import axios from 'axios';

const postArticle = (
  title: string,
  slug: string,
  summary: string,
  mainCategoryId: number,
  subCategoryId: number,
  readTime: number,
  contents: string
) => {
  axios.post('/graphql', {
    mutation: `
    mutation {
      postArticle(
        title: "${title}", 
        slug: "${slug}", 
        summary: "${summary}", 
        mainCategoryId: ${mainCategoryId}, 
        subCategoryId: ${subCategoryId}, 
        readTime:${readTime}, 
        contents: "${contents}"
      )
    }
  `,
  });
};

const Input = () => {
  const onClick = () => {
    postArticle('new1', '/d', 'new1summary', 1, 1, 2, '<h1>hello</h1>');
  };

  return (
    <div>
      <button onClick={onClick}>click</button>
    </div>
  );
};

export default Input;
