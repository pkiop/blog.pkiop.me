import type { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyle from './GlobalStyle';

export interface Prop {
  children?: ReactElement | ReactElement[] | string | any;
}

const GlobalThemeProvider = ({ children = null }: Prop) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GlobalThemeProvider;
