// styles
import styled from 'styled-components';

export const Tag = styled.div`
  padding: 0.2em 0.4em;
  margin: 0.3em;
  margin-bottom: 0.6em;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  font-size: 1.2rem;
  :hover {
    cursor: pointer;
  }
`;
