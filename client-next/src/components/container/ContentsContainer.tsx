import { useEffect, useState } from 'react';
import ContentsList from '@components/UI/ContentsList';
import type { IContent } from 'types/content.interface';
import { ITag } from 'types/tag.interface';
import { testTagList } from '@fixture/Tag';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleLabels } from '@state/createStore';

const ContentsContainer = () => {
  const dispatch = useDispatch();
  const articleLabels = useSelector((state: any) => state.articleLabels);

  useEffect(() => {
    if (articleLabels.length === 0) {
      dispatch(getArticleLabels());
    }
  }, []);

  const contentsList: IContent[] = articleLabels.map((article: IContent) => ({
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
