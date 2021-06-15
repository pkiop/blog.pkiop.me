// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';

export const SubCategory = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.subText};

  > div {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    :hover {
      cursor: pointer;
    }
  }
`;

export const SubCategoryComponent = styled.div`
  text-shadow: ${({ isSelected }) =>
    isSelected
      ? ' -0.1px 0 yellow, 0 0.1px yellow, 0.1px 0 yellow, 0 -0.1px yellow'
      : 'none'};
`;
