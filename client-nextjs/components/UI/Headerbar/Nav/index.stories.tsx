import React from 'react';
import Nav from './index';
import { headerbarNavigation } from 'fixture/Headerbar';

export default {
  title: 'Headerbar / Nav',
  component: Nav,
};

export const MainNav = () => {
  return <Nav NavButtonList={headerbarNavigation.nav.NavButtonList} />;
};
