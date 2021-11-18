// styles
import styled from 'styled-components';
import { transition } from '@styles/theme';

export interface ILogo {
  objectFit?: boolean;
}

export const Logo = styled.img<ILogo>`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: ${({ objectFit = false }) => (objectFit ? 'contain' : 'fill')};
  &:hover {
    filter: brightness(140%);
    transition: filter ${transition.hoverTransitionTime};
  }
  transition: filter ${transition.hoverTransitionTime};
`;
