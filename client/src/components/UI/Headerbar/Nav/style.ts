// styles
import { colors, layout } from 'styles/theme';
import styled from 'styled-components';
import { ISidebarOpen } from 'types/headerbar';

const { header: headerColor } = colors;
export const Nav = styled.div``;

const bdr = layout.sidebarBorderRadius;

export const NavList = styled.div<ISidebarOpen>`
  .header-nav-wrapper > a {
    font-size: 2rem;
    font-weight: 500;
    color: ${headerColor.color};
    margin-left: 1.6rem;

    &:hover {
      color: ${headerColor.color_hover};
    }
  }

  @media (max-width: ${layout.mobileWidth}) {
    position: relative;

    .header-nav-wrapper {
      position: absolute;
      top: 0;
      right: -1rem;
      right: ${({ isOpen }) => (isOpen ? '-1rem' : '-40rem')};
      background-color: ${colors.mobileSidebarBgColor};
      display: flex;
      flex-direction: column;

      border-radius: ${bdr} ${bdr} 0 0;
      padding-top: 1rem;
      padding-right: 2rem;

      width: ${layout.sidebarWidth};
      transition: 0.3s right;

      > a {
        margin: 1rem;
        text-align: right;
      }
      z-index: 1;
    }
  }
`;

export const HamburgerImg = styled.img`
  width: 4rem;
  height: 4rem;

  cursor: pointer;

  @media (min-width: ${layout.mobileWidth}) {
    display: none;
  }
`;

export const FullScreenDimmed = styled.div<ISidebarOpen>`
  position: fixed;
  display: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  @media (max-width: ${layout.mobileWidth}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;
