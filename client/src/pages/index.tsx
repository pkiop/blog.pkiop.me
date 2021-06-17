import * as React from 'react';
import { Helmet } from 'react-helmet';
import SidebarContainer from 'components/container/SidebarContainer';
import ContentsContainer from 'components/container/ContentsContainer';
import styled from 'styled-components';
import MainTemplate from 'templates/Main';
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
  const MainContent = (
    <>
      <Helmet title="blog.pkiop.me" />
      <IndexPageWrapper>
        <ContentsWrapper>
          <ContentsContainer />
          <SidebarContainer />
        </ContentsWrapper>
      </IndexPageWrapper>
    </>
  );
  return <MainTemplate contents={MainContent} />;
};

export default IndexPage;
