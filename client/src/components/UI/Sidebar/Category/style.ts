// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';
import SubCategoryComponent from './SubCategory';

export const Category = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 0.6rem;
  cursor: pointer;
  color: ${colors.subText};
  text-shadow: ${({ isSelected }) =>
    isSelected
      ? ' -0.1px 0 yellow, 0 0.1px yellow, 0.1px 0 yellow, 0 -0.1px yellow'
      : 'none'};
`;

export const SubCategory = styled(SubCategoryComponent)`
  margin-left: 4rem;
`;
