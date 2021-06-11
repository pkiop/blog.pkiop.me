import * as React from 'react';
import Headerbar from 'components/UI/Headerbar';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import { Helmet } from 'react-helmet';
import SidebarContainer from 'components/container/SidebarContainer';
import ContentsContainer from 'components/container/ContentsContainer';
import styled from 'styled-components';
// styles

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > :last-child {
    width: 20rem;
  }

  @media (min-width: 760px) {
    width: 760px;
  }
`;

const IndexPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// markup
const IndexPage = () => {
  return (
    <GlobalThemeProvider>
      <Helmet title="blog.pkiop.me" />
      <Headerbar />
      <IndexPageWrapper>
        <ContentsWrapper>
          <ContentsContainer />
          <SidebarContainer />
        </ContentsWrapper>
      </IndexPageWrapper>
    </GlobalThemeProvider>
  );
};

export default IndexPage;
