import type { Post } from 'types/post.interface';
import * as S from './style';
import TitleBoxComponent from './Titlebox';

const PostApp = ({ title, date, readTime, html }: Post) => (
  <S.Post>
    <div className="blog-post">
      <TitleBoxComponent title={title} date={date} readTime={readTime} />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  </S.Post>
);
export default PostApp;
