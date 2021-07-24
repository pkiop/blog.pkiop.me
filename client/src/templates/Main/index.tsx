import Headerbar from 'components/UI/Headerbar';
import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { headerbarNavigation } from 'fixture/Headerbar';

export interface IMainTemplate {
  className?: string;
  contents: any;
}

function MainTemplate({ contents }: IMainTemplate) {
  return (
    <GlobalThemeProvider>
      <Headerbar nav={headerbarNavigation.nav} />
      {contents}
    </GlobalThemeProvider>
  );
}

export default MainTemplate;
