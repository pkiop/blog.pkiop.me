// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';

const { sidebar: sidebarColor } = colors;

const fontSize = '1.6rem';
export const SubCategory = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ isDarkMode }) =>
    isDarkMode
      ? sidebarColor.dark.category.color
      : sidebarColor.category.color};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ isDarkMode }) =>
      isDarkMode
        ? sidebarColor.dark.category.bgColor
        : sidebarColor.category.bgColor};
    padding: 0.5rem 1.2rem;
    border: 1px solid ${sidebarColor.category.border};
    border-radius: 0.6rem;

    font-size: ${fontSize};
    margin-bottom: 0.6rem;
    transition: 0.2s background-color;
    &:hover {
      background-color: ${({ isDarkMode }) =>
        isDarkMode
          ? sidebarColor.dark.category.bgColor_hover
          : sidebarColor.category.bgColor_hover};
      border: 1px solid ${sidebarColor.category.border};
      cursor: pointer;
    }
  }
`;

export const SubCategoryComponent = styled.div<{ isDarkMode: boolean }>`
  ${({ isSelected, isDarkMode }: any) => {
    return (
      isSelected &&
      `
    background-color: ${
      isDarkMode
        ? sidebarColor.dark.category.bgColor_hover
        : sidebarColor.category.bgColor_hover
    } !important;
    border: 1px solid ${sidebarColor.category.border} !important;
    `
    );
  }}
`;

export const Count = styled.div`
  font-size: ${fontSize};
`;
