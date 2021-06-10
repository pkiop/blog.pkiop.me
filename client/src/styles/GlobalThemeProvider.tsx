import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';

interface Prop {
  children?: React.ReactElement | React.ReactElement[] | string | any;
}
const GlobalThemeProvider = ({ children }: Prop) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GlobalThemeProvider;
