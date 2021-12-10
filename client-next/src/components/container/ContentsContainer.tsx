import { useEffect, useState } from 'react';
import ContentsList from '@components/UI/ContentsList';
import { ITag } from '@components/UI/Sidebar/TagList/Tag';
import { testTagList } from '@fixture/Tag';
import { getArticles } from '@api/index';

const ContentsContainer = () => {
  const [articles, setArticles] = useState<any>([]);
  const fetchData = async () => {
    const res = await getArticles();
    setArticles(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contentsList = articles.map((edge: any) => ({
    ...edge,
    tags: edge.tags.map((tag: string) => ({
      ...(testTagList.find((testTag: ITag) => testTag.title === tag) || {
        color: 'gray',
        textColor: '#010101',
      }),
      title: tag,
    })),
  }));

  return <ContentsList contentsList={contentsList} />;
};

export default ContentsContainer;
