/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import type { Post } from 'types/post.interface';
import * as S from './style';
import TitleBoxComponent from './Titlebox';

const PostApp = ({ title, date, readTime, html }: Post) => (
  <S.Post>
    <div className="blog-post">
      <TitleBoxComponent title={title} date={date} readTime={readTime} />

      <ReactMarkdown
        className="blog-post-content"
        children={html}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
      />
    </div>
    <S.CPLink>
      <iframe
        title="ads"
        src="https://ads-partners.coupang.com/widgets.html?id=488028&template=carousel&trackingCode=AF1679783&subId=&width=680&height=140"
        width="210"
        height="150"
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
      />
      <a
        style={{ marginTop: '1.4rem', display: 'block' }}
        href="https://coupa.ng/b5eXs7"
      >
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
        제공받습니다.
      </a>
    </S.CPLink>
  </S.Post>
);
export default PostApp;
