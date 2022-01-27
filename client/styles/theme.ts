import { css, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakPoint: '769px',
  colors: {
    black: '#1e1f1d',
    yellow: '#edb83c',
    orange: '#eb7952',
    gray: '#6e6e6e',
    grayBackground: '#f5f5f5',
  },
};

export const colors = {
  mainBgColor: '#2d333a',
  subBgColor: '#22272D',
  mainTextColor: '#CDD9E5',
  subText: '#B0BAC6',
  darkText: '#010101',
  mobileSidebarBgColor: '#23272D',
  hr: '#393E46',
  link: '#539bf5',
};

export const layout = {
  mobileWidth: '600px',
  sidebarWidth: '30rem',
  sidebarBorderRadius: '2rem',
};

export const transition = {
  hoverTransitionTime: '0.3s',
};

export const LeftSideInput = css`
  width: 100%;
  height: 4rem;
  font-size: 1.4rem;

  margin-top: 1rem;
  color: #8c9195;

  border: 0.1rem solid black;
  border-radius: 0.5rem;
`;
