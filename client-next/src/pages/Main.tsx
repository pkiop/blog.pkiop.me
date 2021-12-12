import SidebarContainer from '@components/container/SidebarContainer';
import ContentsContainer from '@components/container/ContentsContainer';
import PostContainer from '@components/container/PostContainer';
import styled from 'styled-components';
import MainTemplate from '@templates/Main';
import { Route } from 'react-router-dom';
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
    <IndexPageWrapper>
      <ContentsWrapper>
        <ContentsContainer />
        <SidebarContainer />
      </ContentsWrapper>
    </IndexPageWrapper>
  );
  const PostContent = (
    <IndexPageWrapper>
      <ContentsWrapper>
        <PostContainer />
      </ContentsWrapper>
    </IndexPageWrapper>
  );
  return (
    <>
      <Route path="/" element={<MainTemplate contents={MainContent} />} />
      <Route path="/:slug" element={<MainTemplate contents={PostContent} />} />
    </>
  );
};

export default IndexPage;
