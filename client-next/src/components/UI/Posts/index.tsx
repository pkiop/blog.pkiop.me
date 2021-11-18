import React from 'react';
import * as S from './style';
import Titlebox from './Titlebox';

function Posts({
  frontmatter,
  html, // this prop will be injected by the GraphQL query below.
}: any) {
  return (
    <S.Posts>
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
