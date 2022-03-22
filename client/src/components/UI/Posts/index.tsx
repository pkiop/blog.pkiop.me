import React from 'react';
import * as S from './style';
import Titlebox from './Titlebox';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'types/store';

function Posts({
  frontmatter,
  html, // this prop will be injected by the GraphQL query below.
}: any) {
  const isDarkMode = useSelector((state: GlobalStoreState) => state.isDarkMode);
  return (
    <S.Posts isDarkMode={isDarkMode}>
      <div className="blog-post">
        <Titlebox
          title={frontmatter.title}
          date={frontmatter.date}
          readTime={frontmatter.readTime}
        />
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </S.Posts>
  );
}

export default Posts;
