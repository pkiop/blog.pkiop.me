import * as React from 'react';
import Headerbar from 'components/UI/Headerbar';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { Helmet } from 'react-helmet';
import SidebarContainer from 'components/container/SidebarContainer';
import styled from 'styled-components';
import DonateWrapper from './DonateWrapper';
// styles

const ContentsWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

// markup
const IndexPage = () => {
  React.useEffect(() => {}, []);
  return (
    <GlobalThemeProvider>
      <Helmet title="blog.pkiop.me" />
      <Headerbar />
      <ContentsWrapper>
        <DonateWrapper />
        <SidebarContainer />
      </ContentsWrapper>
    </GlobalThemeProvider>
  );
};

export default IndexPage;
