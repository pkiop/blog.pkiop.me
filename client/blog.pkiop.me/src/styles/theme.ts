import { css, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  breakPoint: '769px',
  colors: {
    black: '#1e1f1d',
    yellow: '#edb83c',
    orange: '#eb7952',
    gray: '#6e6e6e',
    gray_background: '#f5f5f5',
  },
};

export const colors = {
  mainBgColor: '#2e333a',
  mainTextColor: '#cdd9e5',
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

export default theme;
