import { css, DefaultTheme } from 'styled-components';

const gray900 = '#212121';
const gray800 = '#424242';
const gray700 = '#616161';
const gray600 = '#757575';
const gray500 = '#9E9E9E';
const gray400 = '#BDBDBD';
const gray300 = '#E0E0E0';
const gray200 = '#EEEEEE';
const gray100 = '#F5F5F5';
const gray50 = '#FAFAFA';

const teal900 = '#1b6669';
const teal800 = '#238995';
const teal700 = '#269dad';
const teal600 = '#2bb2c7';
const teal500 = '#2fc3da';
const teal400 = '#3dcce0';
const teal300 = '#59d5e6';
const teal200 = '#86e2ee';
const teal100 = '#b5edf4';
const teal50 = '#e1f8fb';

export const header = {
  bgColor: gray200,
  color: gray900,
  color_hover: gray700,
};

export const main = {
  bgColor: gray200,
};

export const contents = {
  bgColor: gray300,
  bgColor_hover: gray200,
  color: gray900,
};

export const sidebar = {
  category: {
    bgColor: gray300,
    bgColor_hover: gray200,
    color: gray900,
    border: gray800,
  },
};

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
  header,
  contents,
  sidebar,
  main,
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

export default theme;
