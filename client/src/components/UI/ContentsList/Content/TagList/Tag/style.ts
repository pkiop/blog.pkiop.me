// styles
import styled from 'styled-components';

export const Tag = styled.div`
  padding: 0.2em 0.4em;
  margin: 0.3em;
  margin-bottom: 0.6em;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  color: ${(props: any) => props.textColor};
  font-size: 1.6rem;

  :hover {
    cursor: pointer;
  }
`;
