// styles
import { colors, transition } from 'styles/theme';
import styled from 'styled-components';

const { header: headerColor } = colors;

interface HeaderBarStyle {
  isDarkMode: boolean;
}

export const HeaderBar = styled.div<HeaderBarStyle>`
  font-family: monaco;
  padding: 1.6rem 3rem;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? headerColor.dark.bgColor : headerColor.bgColor};
  color: ${({ isDarkMode }) =>
    isDarkMode ? headerColor.dark.color : headerColor.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${headerColor.color};
  transition: ${transition.hoverTransitionTime} background-color;

  > a {
    font-size: 3.2rem;
    color: ${({ isDarkMode }) =>
      isDarkMode ? headerColor.dark.color : headerColor.color};

    &:hover {
      color: ${({ isDarkMode }) =>
        isDarkMode ? headerColor.dark.color_hover : headerColor.color_hover};
    }
  }
`;
