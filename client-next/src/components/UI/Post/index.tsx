import type { Post } from 'types/post.interface';
import * as S from './style';
import Titlebox from './Titlebox';

const PostApp = ({
  title,
  date,
  readTime,
  html, // this prop will be injected by the GraphQL query below.
}: Post) => (
  <S.Post>
    <div className="blog-post">
      <Titlebox title={title} date={date} readTime={readTime} />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </S.Post>
);
export default PostApp;
