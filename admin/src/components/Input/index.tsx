import axios from 'axios';
import { useRef } from 'react';

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
  const mainCategoryList = [1, 2];
  const articleInputRef = useRef<any>({
    title: null,
    slug: null,
    summary: null,
    mainCategoryId: null,
    subCategoryId: null,
    readTime: null,
    contents: null,
  });
  const onClick = () => {
    console.log('articleInputRef : ', articleInputRef.current);
    const isNull = Object.entries(articleInputRef.current).some(
      ([key, value]) => {
        return value === null;
      }
    );
    if (isNull) return;
    console.log('post  !');
    postArticle(
      articleInputRef.current.title.value,
      articleInputRef.current.slug.value,
      articleInputRef.current.summary.value,
      articleInputRef.current.mainCategoryId.value,
      articleInputRef.current.subCategoryId.value,
      articleInputRef.current.readTime.value,
      articleInputRef.current.contents.value
    );
  };

  return (
    <div>
      <div>
        <input
          placeholder='title'
          ref={(el) => (articleInputRef.current.title = el)}
        />
        <input
          placeholder='slug'
          ref={(el) => (articleInputRef.current.slug = el)}
        />
        <input
          placeholder='summary'
          ref={(el) => (articleInputRef.current.summary = el)}
        />
        <select ref={(el) => (articleInputRef.current.mainCategoryId = el)}>
          {mainCategoryList.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>

        <select ref={(el) => (articleInputRef.current.subCategoryId = el)}>
          {mainCategoryList.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
        <input
          placeholder='readTime'
          ref={(el) => (articleInputRef.current.readTime = el)}
        />
        <input
          placeholder='contents'
          ref={(el) => (articleInputRef.current.contents = el)}
        />
      </div>
      <button onClick={onClick}>Posting</button>
    </div>
  );
};

export default Input;
