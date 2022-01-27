// styles
import styled from 'styled-components';
import { transition } from 'styles/theme';

export const Tag = styled.div`
  padding: 0.2em 0.4em;
  margin: 0.3em;
  height: 2rem;
  white-space: nowrap;
  margin-bottom: 0.6em;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  color: ${(props: any) => props.fontColor};
  border: 1px solid
    ${({ isSelected }: any) => (isSelected ? ' yellow' : 'transparent')};
  font-size: 1.4rem;
  text-align: center;

  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    filter: brightness(140%);
    transition: ${transition.hoverTransitionTime} filter;
  }
  transition: ${transition.hoverTransitionTime} filter;
`;

export default {};
