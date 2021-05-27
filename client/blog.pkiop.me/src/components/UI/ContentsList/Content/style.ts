// styles
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 0.4rem;

  > div {
    margin: 1em 1em;
    font-size: 1.6rem;
    &:first-child {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
`;
