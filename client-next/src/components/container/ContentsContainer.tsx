import { useEffect, useState } from 'react';
import ContentsList from '@components/UI/ContentsList';
import type { IContent } from 'types/content.interface';
import { ITag } from 'types/tag.interface';
import { testTagList } from '@fixture/Tag';
import { getArticleLabels } from '@api/index';

const ContentsContainer = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const fetchData = async () => {
    const res = await getArticleLabels();
    setArticles(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contentsList: IContent[] = articles.map((article: IContent) => ({
    ...article,
    html: article.contents,
    tags: article.tags.map((tag: ITag) => ({
      ...(testTagList.find((testTag: ITag) => testTag.title === tag.title) || {
        color: 'gray',
        fontColor: '#010101',
      }),
      title: tag.title,
    })),
  }));

  return <ContentsList contentsList={contentsList} />;
};

export default ContentsContainer;
