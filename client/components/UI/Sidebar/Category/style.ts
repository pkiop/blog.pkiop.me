// styles
import styled from 'styled-components';
import { colors } from '@styles/theme';
import SubCategoryComp from './SubCategory';

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
  color: ${colors.subText};

  padding: 0.6rem 1.4rem;
  background-color: #383e46;

  border: 1px solid #474e56;
  border-radius: 0.6rem;

  margin-bottom: 0.6rem;
  transition: 0.2s background-color;
  :hover {
    background-color: #464c55;
    border: 1px solid #79838f;
    cursor: pointer;
  }

  ${({ isSelected }: any) => {
    if (isSelected) {
      return (
        isSelected &&
        `
    background-color: #464c55;
    border: 1px solid #79838f;
    cursor: pointer;
    `
      );
    }
    return '';
  }}
`;

export const SubCategory = styled(SubCategoryComp)`
  margin-left: 4rem;
`;

export const Count = styled.div`
  font-size: 1.6rem;
`;
