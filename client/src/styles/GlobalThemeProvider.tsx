import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './GlobalStyle';
import { useSelector } from 'react-redux';
import { GlobalStoreState } from 'types/store';

interface Prop {
  children?: React.ReactElement | React.ReactElement[] | string | any;
}

const GlobalThemeProvider = ({ children }: Prop) => {
  const isDarkMode = useSelector((state: GlobalStoreState) => state.isDarkMode);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isDarkMode={isDarkMode} />
      {children}
    </ThemeProvider>
  );
};

export default GlobalThemeProvider;
