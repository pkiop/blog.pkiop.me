// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';

export const ExplainDonate = styled.div`
  font-size: 2rem;
  color: ${colors.subText};

  & > h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  & > div {
    font-size: 1.6rem;
    &:last-child {
      margin-bottom: 4rem;
    }
  }
`;
