// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';
import SubCategoryComponent from './SubCategory';

const { sidebar: sidebarColor } = colors;

const fontSize = '2rem';

export const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${fontSize};
  margin-bottom: 0.6rem;
  cursor: pointer;
  color: ${sidebarColor.category.color};

  padding: 0.6rem 1.4rem;
  background-color: ${sidebarColor.category.bgColor};

  border: 1px solid ${sidebarColor.category.border};
  border-radius: 0.6rem;

  margin-bottom: 0.6rem;
  transition: 0.2s background-color;
  :hover {
    background-color: ${sidebarColor.category.bgColor_hover};
    border: 1px solid ${sidebarColor.category.border};
    cursor: pointer;
  }

  ${({ isSelected }: any) => {
    return (
      isSelected &&
      `
    background-color: ${sidebarColor.category.bgColor_hover};
    border: 1px solid ${sidebarColor.category.border};
    cursor: pointer;
    `
    );
  }}
`;

export const SubCategory = styled(SubCategoryComponent)`
  margin-left: 4rem;
`;

export const Count = styled.div`
  font-size: 1.6rem;
`;
