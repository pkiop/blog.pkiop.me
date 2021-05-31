// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';

export const Posts = styled.div`
  width: 100%;
  @media (min-width: 900px) {
    width: 900px;
  }
  background-color: ${colors.subBgColor};

  .blog-post-content {
    padding: 0 3em 3em;
    color: ${colors.subText};
    line-height: 2.4rem;
    font-size: 1.6rem;

    > p,
    > p > *,
    > ol > * {
      font-size: 1.6rem;
    }

    > h2 {
      font-size: 2rem;
      margin-top: 1em;
      margin-bottom: 1em;
    }

    > h3 {
      font-size: 1.8rem;
      margin-top: 0.8em;
      margin-bottom: 0.8em;
    }

    > h4 {
      font-size: 1.6rem;
      margin-top: 0.8em;
      margin-bottom: 0.8em;
    }

    a {
      color: ${colors.link};
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
  }
`;
