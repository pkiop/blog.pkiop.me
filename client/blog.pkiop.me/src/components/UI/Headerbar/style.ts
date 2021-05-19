// styles
import { colors } from 'styles/theme';
import styled from 'styled-components';
export const HeaderBar = styled.div`
  padding: 1.6rem 3rem;
  background-color: ${colors.mainBgColor};
  color: ${colors.mainTextColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 3.2rem;

  :hover {
    filter: brightness(2);
  }
`;
