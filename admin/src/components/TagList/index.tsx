import type { Tag } from '../../types/tag.interface';
import TagComponent from '../Tag';
import axios from 'axios';
import { atom, useRecoilState } from 'recoil';
import { useQuery } from 'react-query';

const getTags = async () => {
  const response = await axios.post('/graphql', {
    query: `query {
        getTags {
          id
          title
          color 
          fontColor 
        }
      }`,
  });
  return response.data.data.getTags;
};

const tagState = atom<Tag>({
  key: 'articleState',
  default: {
    id: 0,
    title: 'none',
    fontColor: '#000000',
    color: '#fff',
  },
});

const TagList = () => {
  const { isLoading, error, data: tags } = useQuery('tags', () => getTags());

  const [tag, setTag] = useRecoilState(tagState);

  if (isLoading) return <>loading</>;
  if (error) return <>error : {JSON.stringify(error)}</>;

  const TagListComponent = tags.map((tag: Tag) => {
    return <TagComponent key={tag.id} onClick={() => setTag(tag)} tag={tag} />;
  });
  return (
    <>
      <div className='border-2 border-rose-500 p-5'>{TagListComponent}</div>
      <div>
        {tag.title !== 'none' && (
          <TagComponent key={tag.title} onClick={() => {}} tag={tag} />
        )}
      </div>
    </>
  );
};

export default TagList;
