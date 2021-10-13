import * as React from 'react';
import { Helmet } from 'react-helmet';
import SidebarContainer from 'components/container/SidebarContainer';
import styled from 'styled-components';
import DonateWrapper from './DonateWrapper';
import MainTemplate from 'templates/Main';

const ContentsWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
`;

const IndexPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// markup
const IndexPage = () => {
  React.useEffect(() => {}, []);
  const MainContent = (
    <>
      <Helmet title="PKIOP BLOG" />
      <IndexPageWrapper>
        <ContentsWrapper>
          <DonateWrapper />
          <SidebarContainer />
        </ContentsWrapper>
      </IndexPageWrapper>
    </>
  );
  return <MainTemplate contents={MainContent} />;
};

export default IndexPage;
