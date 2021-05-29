// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';

export const TagList = styled.div`
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
