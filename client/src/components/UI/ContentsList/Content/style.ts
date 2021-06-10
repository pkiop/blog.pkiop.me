// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 0.1rem solid ${colors.hr};
  border-radius: 0.8rem;
  color: ${colors.subText};

  &:hover {
    cursor: pointer;
  }

  > div {
    margin: 1em 1em;
    font-size: 1.6rem;
    &:first-child {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
`;
