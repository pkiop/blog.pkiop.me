export interface INavButton {
  text: string;
  link: string;
  isClientRoute: boolean;
}

export interface INav {
  NavButtonList: INavButton[];
}

export interface IHeaderbar {
  nav: INav;
}

export interface SidebarStyle {
  isOpen: boolean;
  isDarkMode: boolean;
}
