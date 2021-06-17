// styles
import styled from 'styled-components';
import LogoComponent from './Logo';
import { colors } from 'styles/theme';

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
