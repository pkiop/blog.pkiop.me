// styles
import styled from 'styled-components';
import { colors, transition } from 'styles/theme';

const { contents: contentsColor } = colors;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 0.1rem solid ${colors.hr};
  border-radius: 0.8rem;
  color: ${contentsColor.color};

  &:hover {
    cursor: pointer;
    transition: ${transition.hoverTransitionTime} filter;
    filter: brightness(140%);
  }
  transition: ${transition.hoverTransitionTime} filter;

  > div {
    margin: 1em 1.8em;
    font-size: 1.6rem;
    &:first-child {
      font-size: 2.4rem;
      margin-left: 1em;
      margin-bottom: 0;
    }
  }
`;

export const SubInfo = styled.div`
  & > .category-date {
    display: flex;
    justify-content: space-between;

    & > div {
      font-size: 2rem;
    }
    margin-bottom: 1rem;
  }
  & > .tag-list {
    font-size: 2rem;
  }
`;
