// styles
import styled from 'styled-components';
import { colors } from 'styles/theme';
import LogoComponent from './Logo';

export interface ILogo {
  objectFit?: boolean;
}

export const AboutMe = styled.div`
  color: ${colors.subText};
  font-size: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

export const Logo = styled(LogoComponent)``;
