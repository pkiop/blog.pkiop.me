import Headerbar from 'components/UI/Headerbar';
import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';

export interface IMainTemplate {
  className?: string;
  contents: any;
}

function MainTemplate({ contents }: IMainTemplate) {
  return (
    <GlobalThemeProvider>
      <Headerbar />
      {contents}
    </GlobalThemeProvider>
  );
}

export default MainTemplate;
