import { useEffect, useState } from 'react';
import ContentsList from '@components/UI/ContentsList';
import type { IContent } from 'types/content.interface';
import { ITag } from 'types/tag.interface';
import { testTagList } from '@fixture/Tag';
import { getArticles } from '@api/index';

const ContentsContainer = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const fetchData = async () => {
    const res = await getArticles();
    setArticles(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contentsList: IContent[] = articles.map((article: any) => ({
    ...article,
    tags: article.tags.map((tag: string) => ({
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
