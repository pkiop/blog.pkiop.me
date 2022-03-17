// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';

const { post: postColor } = colors;

export const Posts = styled.div`
  width: 100%;

  .blog-post-content {
    padding: 0 1.4em 1.4em;
    color: ${postColor.color};
    line-height: 3.6rem;
    font-size: 1.6rem;
    word-break: keep-all;

    > p,
    > p > *,
    > ol > * {
      font-size: 2.1rem;
      margin-bottom: 1rem;
    }

    > h1 {
      font-size: 4rem;
      margin-top: 1.2em;
      margin-bottom: 1.2em;
    }

    > h2 {
      font-size: 3.6rem;
      margin-top: 1em;
      margin-bottom: 0.8em;
    }

    > h3 {
      font-size: 3rem;
      margin-top: 0.8em;
      margin-bottom: 0.8em;
    }

    > h4 {
      font-size: 2.4rem;
      margin-top: 0.8em;
      margin-bottom: 0.8em;
    }

    a {
      color: ${postColor.color_link};
    }

    img {
      width: 100%;
      margin-top: 1em;
      margin-bottom: 1em;
    }
    ul {
      list-style: disc;
      margin-left: 1.4em;
      > * {
        font-size: 1.6rem;
        margin: 0.4rem 0;
      }
    }

    p > .coupang {
      display: flex;
      flex-direction: column;
      align-items: center;

      > img {
        margin-top: 5rem;
        width: auto;
      }
      > span {
        font-size: 1.3rem;
      }
    }

    // code
    pre.grvsc-container {
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 980px) {
    width: 98rem;
    .blog-post-content {
      padding: 0 3em 3em;
    }
  }
`;
