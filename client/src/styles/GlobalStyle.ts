import { createGlobalStyle } from 'styled-components';
import { colors, transition } from 'styles/theme';

const { main: mainColor } = colors;
/* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
*/
const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0 !important;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 10px;
    vertical-align: baseline;
    box-sizing: border-box;
		&::-webkit-scrollbar {
    	display: none; /* Chrome, Safari, Opera*/
		}
  }
  html, body, #root, .Section__container___3YYTG {
    height: 100%;
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? mainColor.dark.bgColor : mainColor.bgColor};
    transition: ${transition.hoverTransitionTime} background-color; 
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button {
    border: none;
    padding: 0;
  }
  button:focus{
    outline:none;
  }
  a {
    color: #fff;
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
    color: #fff;
  }
  body {
    font-family: 'NanumSquare', sans-serif;
  }
`;

export default GlobalStyle;
