// styles
import { colors } from '@styles/theme';
import styled from 'styled-components';

const fontSize = '1.6rem';
export const SubCategory = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.subText};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #383e46;
    padding: 0.5rem 1.2rem;
    border: 1px solid #474e56;
    border-radius: 0.6rem;

    font-size: ${fontSize};
    margin-bottom: 0.6rem;
    transition: 0.2s background-color;
    &:hover {
      background-color: #464c55;
      border: 1px solid #79838f;
      cursor: pointer;
    }
  }
`;

export const SubCategoryComponent = styled.div`
  ${({ isSelected }: any) => {
    if (isSelected) {
      return `
        background-color: #464c55 !important;
        border: 1px solid #79838f !important;
      `;
    }
    return '';
  }}
`;

export const Count = styled.div`
  font-size: ${fontSize};
`;
