// styles
import { colors, layout } from 'styles/theme';
import styled from 'styled-components';

export const Nav = styled.div``;

export const DesktopNavList = styled.div`
  @media (max-width: ${layout.mobileWidth}) {
    display: none;
  }
  > a {
    font-size: 2rem;
    font-weight: 500;
    color: ${colors.mainTextColor};
    margin-left: 1.6rem;

    &:hover {
      color: white;
    }
  }
`;

export const HamburgerImg = styled.img`
  @media (min-width: ${layout.mobileWidth}) {
    display: none;
  }
  width: 4rem;
  height: 4rem;
`;
