// styles
import styled from 'styled-components';
import { colors, transition } from 'styles/theme';

const { contents: contentsColor } = colors;

export const Content = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 0.1rem solid ${colors.hr};
  border-radius: 0.8rem;
  color: ${({ isDarkMode }) =>
    isDarkMode ? contentsColor.dark.color : contentsColor.color};
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? contentsColor.dark.bgColor : contentsColor.bgColor};

  &:hover {
    cursor: pointer;
    transition: filter ${transition.hoverTransitionTime},
      background-color ${transition.hoverTransitionTime};
    filter: brightness(105%);
  }
  transition: filter ${transition.hoverTransitionTime},
    background-color ${transition.hoverTransitionTime};

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
