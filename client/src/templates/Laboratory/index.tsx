import Headerbar from 'components/UI/Headerbar';
import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { headerbarNavigation } from 'fixture/Headerbar';
import LaboratoryGlobalStyle from './laboratoryGlobalStyle';

export interface Laboratory {
  className?: string;
  contents: any;
}

function Laboratory({ contents }: Laboratory) {
  return (
    <GlobalThemeProvider>
      <LaboratoryGlobalStyle />
      <Headerbar nav={headerbarNavigation.nav} />
      {contents}
    </GlobalThemeProvider>
  );
}

export default Laboratory;
