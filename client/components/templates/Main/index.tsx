import Headerbar from '@components/UI/Headerbar';
import GlobalThemeProvider from '@styles/GlobalThemeProvider';
import { headerbarNavigation } from '@fixture/Headerbar';

export interface IMainTemplate {
  className?: string;
  contents: any;
}

const MainTemplate = ({ contents }: IMainTemplate) => (
  <GlobalThemeProvider>
    <Headerbar nav={headerbarNavigation.nav} />
    {contents}
  </GlobalThemeProvider>
);

export default MainTemplate;
