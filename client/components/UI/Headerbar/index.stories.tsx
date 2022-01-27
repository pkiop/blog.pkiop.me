import { headerbarNavigation } from '@fixture/Headerbar';
import Headerbar from './index';

export default {
  title: 'Headerbar',
  component: Headerbar,
};

export const MainHeaderbar = () => <Headerbar nav={headerbarNavigation.nav} />;
