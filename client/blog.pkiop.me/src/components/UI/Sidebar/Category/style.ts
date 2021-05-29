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
`;

export const SubCategory = styled(SubCategoryComponent)`
  margin-left: 3rem;
`;
