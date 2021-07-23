import Headerbar from 'components/UI/Headerbar';
import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { IHeaderbar } from 'types/headerbar';

export interface IMainTemplate {
  className?: string;
  contents: any;
}

function MainTemplate({ contents }: IMainTemplate) {
  const headerbarNavigation: IHeaderbar = {
    nav: {
      NavButtonList: [
        {
          text: 'Article',
          link: '/',
          isClientRoute: true,
        },
        {
          text: 'About',
          link: '/about',
          isClientRoute: true,
        },
      ],
    },
  };
  return (
    <GlobalThemeProvider>
      <Headerbar nav={headerbarNavigation.nav} />
      {contents}
    </GlobalThemeProvider>
  );
}

export default MainTemplate;
