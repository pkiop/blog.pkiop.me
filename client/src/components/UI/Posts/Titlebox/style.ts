// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';

export const Titlebox = styled.div`
  padding: 3em 3em 0 3em;
  color: ${colors.subText};

  > h1 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  > h2 {
    font-size: 1.6rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${colors.hr};
    margin-bottom: 2rem;
  }
`;
