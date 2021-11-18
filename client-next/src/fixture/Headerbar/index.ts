import { IHeaderbar } from 'types/headerbar';

export const headerbarNavigation: IHeaderbar = {
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

export default {};
