// styles
import styled from 'styled-components';

export interface ILogo {
  objectFit?: boolean;
}

export const Logo = styled.img<ILogo>`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: ${({ objectFit = false }) => (objectFit ? 'contain' : 'fill')};
`;
