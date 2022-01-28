import React from 'react';
import Headerbar from './index';
import { headerbarNavigation } from 'fixture/Headerbar';

export default {
  title: 'Headerbar',
  component: Headerbar,
};

export const MainHeaderbar = () => {
  return <Headerbar nav={headerbarNavigation.nav} />;
};
