// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';

export const SubCategory = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    :hover {
      cursor: pointer;
    }
  }
`;