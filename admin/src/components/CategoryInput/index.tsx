import axios from 'axios';
import { useRef } from 'react';

const postCategory = (title: string, classification: string, emoji: string) => {
  axios.post('/graphql', {
    mutation: `
    mutation {
      postCategory(
        title: "${title}", 
        classification: "${classification}", 
        emoji: "${emoji}"
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
  const articleInputRef = useRef<any>({
    title: null,
    classification: null,
    emoji: null,
  });
  const onClick = () => {
    const isNull = Object.entries(articleInputRef.current).some(
      ([key, value]) => {
        return value === null;
      }
    );
    if (isNull) return;
    postCategory(
      articleInputRef.current.title.value,
      articleInputRef.current.classification.value,
      articleInputRef.current.emoji.value
    );
  };

  return (
    <div className='container p-10'>
      <h1 className='text-4xl mb-4'>Content Input</h1>
      <div className='flex-col'>
        <input
          className='block border border-lime-400'
          placeholder='title'
          ref={(el) => (articleInputRef.current.title = el)}
        />
        <select
          className='block border border-lime-400'
          placeholder='classification'
          ref={(el) => (articleInputRef.current.classification = el)}
        >
          <option value='main'>main</option>
          <option value='sub'>sub</option>
        </select>
        <input
          className='block border border-lime-400'
          placeholder='emoji'
          ref={(el) => (articleInputRef.current.emoji = el)}
        />
      </div>
      <button
        className='bg-slate-600 p-3 border border-lime-400'
        onClick={onClick}
      >
        Add Category
      </button>
    </div>
  );
};

export default Input;
