import type { Category } from '../../types/category.interface';
import CategoryComponent from '../Category';
import axios from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useQuery } from 'react-query';

const getCategories = async () => {
  const response = await axios.post('/graphql', {
    query: `query {
        getCategories {
          title
          classification
          emoji
        }
      }`,
  });
  return response.data.data.getCategories;
};

const categoryState = atom<Category>({
  key: 'articleState',
  default: {
    id: 0,
    title: 'none',
    classification: 'none',
    emoji: 'none',
  },
});

const ArticleList = () => {
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery('categories', () => getCategories());

  const [category, setCategory] = useRecoilState(categoryState);

  if (isLoading) return <>loading</>;
  if (error) return <>error : {JSON.stringify(error)}</>;

  const CategoryListComponent = categories.map((category: Category) => {
    return (
      <CategoryComponent
        key={category.id}
        onClick={() => setCategory(category)}
        category={category}
      />
    );
  });
  return (
    <>
      <div className='border-2 border-rose-500 p-5'>
        {CategoryListComponent}
      </div>
      <div>
        {category.title !== 'none' && (
          <CategoryComponent
            key={category.title}
            onClick={() => {}}
            category={category}
          />
        )}
      </div>
    </>
  );
};

export default ArticleList;
