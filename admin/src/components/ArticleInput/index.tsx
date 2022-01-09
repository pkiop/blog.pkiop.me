import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Category } from '../../types/category.interface';
import { Tag } from '../../types/tag.interface';
import { getLocaleStringYMD } from '../../utils/date';

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
          subCategories {
            id
            title
            classification
          }
        }
      }`,
  });
  return response.data.data.getCategories;
};

const getTags = async () => {
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

const TagBlock = ({
  tag,
  selected,
  selectToggle,
}: {
  tag: Tag;
  selected: boolean;
  selectToggle: any;
}) => {
  const style = {
    color: tag.fontColor,
    backgroundColor: tag.color,
    border: selected ? '0.2rem solid red' : '0.2rem solid gray',
    width: '5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '99rem',
  };
  return (
    <div style={style} onClick={selectToggle}>
      {tag.title}
    </div>
  );
};

const Input = () => {
  const [mainCategoryList, setMainCategoryList] = useState<any>([]);
  const [subCategoryList, setSubCategoryList] = useState<any>([]);
  const [tagList, setTagList] = useState<any>([]);
  const [selectedTagList, setSelectedTagList] = useState<any>([]);

  const articleInputInitValue = {
    title: null,
    slug: null,
    summary: null,
    mainCategoryId: null,
    subCategoryId: null,
    readTime: null,
    contents: null,
    showAt: null,
  };
  const articleInputRef = useRef<any>(articleInputInitValue);

  const articleInputKeys = Object.keys(articleInputInitValue);

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
    setSubCategoryList(categoriesResponse[0].subCategories);
  };

  const fetchTags = async () => {
    const tagsResponse = await getTags();
    setTagList(tagsResponse);
  };

  const selectMainCategoryHandler = () => {
    const mainCategoryId = +articleInputRef.current.mainCategoryId.value;
    const mainCategory = mainCategoryList.find(
      (mainCategory: Category) => mainCategory.id === mainCategoryId
    );
    setSubCategoryList(mainCategory.subCategories);
  };

  useEffect(() => {
    fetchCategories();
    fetchTags();
  }, []);

  const isTagSelected = (selectedTag: Tag) => {
    return selectedTagList.some((tag: Tag) => tag.id === selectedTag.id);
  };

  const toggleTag = (selectedTag: Tag) => {
    const selectTagIdx = selectedTagList.findIndex(
      (tag: Tag) => tag.id === selectedTag.id
    );
    if (selectTagIdx !== -1) {
      setSelectedTagList((state: Tag[]) => [
        ...state.slice(0, selectTagIdx),
        ...state.slice(selectTagIdx + 1),
      ]);
      return;
    }
    setSelectedTagList((state: Tag[]) => state.concat(selectedTag));
  };

  return (
    <div className='container p-10'>
      <h1 className='text-4xl mb-4'>Content Input</h1>
      <div className='flex-col'>
        {articleInputKeys.map((key: string) => {
          if (key === 'mainCategoryId') {
            return (
              <select
                key={key}
                className='block border border-lime-400'
                ref={(el) => (articleInputRef.current.mainCategoryId = el)}
                onChange={selectMainCategoryHandler}
              >
                {mainCategoryList.map((el: any) => (
                  <option key={el.id} value={el.id}>
                    {el.title}
                  </option>
                ))}
              </select>
            );
          }
          if (key === 'subCategoryId') {
            return (
              <select
                key={key}
                className='block border border-lime-400'
                ref={(el) => (articleInputRef.current.subCategoryId = el)}
              >
                {subCategoryList.map((el: any) => (
                  <option key={el.id} value={el.id}>
                    {el.title}
                  </option>
                ))}
              </select>
            );
          }
          return (
            <input
              key={key}
              className='block border border-lime-400'
              placeholder={key}
              type={key === 'showAt' ? 'date' : 'text'}
              ref={(el) => (articleInputRef.current[key] = el)}
              defaultValue={key === 'showAt' ? getLocaleStringYMD() : undefined}
            />
          );
        })}
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        {tagList.map((tag: Tag) => (
          <TagBlock
            key={tag.id}
            tag={tag}
            selected={isTagSelected(tag)}
            selectToggle={() => toggleTag(tag)}
          />
        ))}
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
