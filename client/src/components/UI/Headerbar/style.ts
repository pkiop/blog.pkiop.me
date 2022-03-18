// styles
import { colors } from 'styles/theme';
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
  color: ${headerColor.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${headerColor.color};

  > a {
    font-size: 3.2rem;
    color: ${headerColor.color};

    &:hover {
      color: ${headerColor.color_hover};
    }
  }
`;
