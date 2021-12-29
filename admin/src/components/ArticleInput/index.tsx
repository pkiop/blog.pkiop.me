import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const postArticle = (
  title: string,
  slug: string,
  summary: string,
  mainCategoryId: number,
  subCategoryId: number,
  readTime: number,
  contents: string,
  showAt: Date
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
        showAt: "${showAt}"
      )
    }
  `,
  });
};

const getCategories = async () => {
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
  return response.data.data.getCategories;
};

const Input = () => {
  const [mainCategoryList, setMainCategoryList] = useState<any>([]);
  const [subCategoryList, setSubCategoryList] = useState<any>([]);

  const articleInputRef = useRef<any>({
    title: null,
    slug: null,
    summary: null,
    mainCategoryId: null,
    subCategoryId: null,
    readTime: null,
    contents: null,
    showAt: null,
  });
  const onClick = () => {
    const isNull = Object.entries(articleInputRef.current).some(
      ([key, value]) => {
        return value === null;
      }
    );
    if (isNull) return;
    postArticle(
      articleInputRef.current.title.value,
      articleInputRef.current.slug.value,
      articleInputRef.current.summary.value,
      articleInputRef.current.mainCategoryId.value,
      articleInputRef.current.subCategoryId.value,
      articleInputRef.current.readTime.value,
      articleInputRef.current.contents.value,
      articleInputRef.current.showAt.value
    );
  };

  const fetchCategories = async () => {
    const categoriesResponse = await getCategories();
    setMainCategoryList(
      categoriesResponse.filter((el: any) => el.classification === 'main')
    );
    setSubCategoryList(
      categoriesResponse.filter((el: any) => el.classification === 'sub')
    );
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className='container p-10'>
      <h1 className='text-4xl mb-4'>Content Input</h1>
      <div className='flex-col'>
        <input
          className='block border border-lime-400'
          placeholder='title'
          ref={(el) => (articleInputRef.current.title = el)}
        />
        <input
          className='block border border-lime-400'
          placeholder='slug'
          ref={(el) => (articleInputRef.current.slug = el)}
        />
        <input
          className='block border border-lime-400'
          placeholder='summary'
          ref={(el) => (articleInputRef.current.summary = el)}
        />
        <select
          className='block border border-lime-400'
          ref={(el) => (articleInputRef.current.mainCategoryId = el)}
        >
          {mainCategoryList.map((el: any) => (
            <option key={el.id} value={el.id}>
              {el.title}
            </option>
          ))}
        </select>

        <select
          className='block border border-lime-400'
          ref={(el) => (articleInputRef.current.subCategoryId = el)}
        >
          {subCategoryList.map((el: any) => (
            <option key={el.id} value={el.id}>
              {el.title}
            </option>
          ))}
        </select>
        <input
          className='block border border-lime-400'
          placeholder='readTime'
          ref={(el) => (articleInputRef.current.readTime = el)}
        />
        <input
          className='block h-96 w-full border border-lime-400'
          placeholder='contents'
          ref={(el) => (articleInputRef.current.contents = el)}
        />
        <input
          className='block w-full border border-lime-400'
          placeholder='contents'
          type='date'
          ref={(el) => (articleInputRef.current.showAt = el)}
        />
      </div>
      <button
        className='bg-slate-600 p-3 border border-lime-400'
        onClick={onClick}
      >
        Posting
      </button>
    </div>
  );
};

export default Input;
