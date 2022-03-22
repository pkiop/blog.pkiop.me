// styles
import { colors, layout } from 'styles/theme';
import styled from 'styled-components';
import { SidebarStyle } from 'types/headerbar';

const { header: headerColor, sidebar: sidebarColor } = colors;
export const Nav = styled.div``;

const bdr = layout.sidebarBorderRadius;

export const NavList = styled.div<SidebarStyle>`
  .header-nav-wrapper {
    display: flex;
    align-items: center;
    > a {
      font-size: 2rem;
      font-weight: 500;
      color: ${({ isDarkMode }) =>
        isDarkMode ? headerColor.dark.color : headerColor.color};
      margin-left: 1.6rem;

      &:hover {
        color: ${({ isDarkMode }) =>
          isDarkMode ? headerColor.dark.color_hover : headerColor.color_hover};
      }
    }

    .dark-mode {
      width: 3rem;
      height: 3rem;
      z-index: 99;
      margin-left: 1.6rem;
      border-radius: 999rem;
      background-color: ${({ isDarkMode }) =>
        isDarkMode ? headerColor.bgColor : headerColor.dark.bgColor};
      cursor: pointer;

      &:hover {
        border: 3px solid
          ${({ isDarkMode }) =>
            isDarkMode
              ? headerColor.darkModeBtnBorder
              : headerColor.dark.darkModeBtnBorder};
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? headerColor.bgColor : headerColor.dark.bgColor};
      }
    }
  }

  @media (max-width: ${layout.mobileWidth}) {
    position: relative;

    .header-nav-wrapper {
      position: absolute;
      top: 0;
      right: -1rem;
      right: ${({ isOpen }) => (isOpen ? '-1rem' : '-40rem')};
      background-color: ${({ isDarkMode }) =>
        isDarkMode ? headerColor.dark.bgColor : sidebarColor.bgColor};
      display: flex;
      flex-direction: column;

      border-radius: ${bdr} ${bdr} 0 0;
      padding-top: 1rem;
      padding-right: 2rem;

      width: ${layout.sidebarWidth};
      transition: 0.3s right;

      z-index: 10;

      > a {
        margin: 1rem;
        text-align: right;
      }
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

export const FullScreenDimmed = styled.div<SidebarStyle>`
  position: fixed;
  display: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.2);
  @media (max-width: ${layout.mobileWidth}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;
