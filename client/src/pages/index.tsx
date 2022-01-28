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
  width: 94%;

  @media (min-width: 980px) {
    width: 980px;
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
      <Helmet title="PKIOP BLOG" />
      <IndexPageWrapper>
        <ContentsWrapper>
          <ContentsContainer />
          <SidebarContainer />
        </ContentsWrapper>
      </IndexPageWrapper>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<script data-ad-client="ca-pub-8000924543923636" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>',
        }}
      ></div>
    </>
  );
  return <MainTemplate contents={MainContent} />;
};

export default IndexPage;
