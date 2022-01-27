import SidebarContainer from '@components/container/SidebarContainer';
import ContentsContainer from '@components/container/ContentsContainer';
import styled from 'styled-components';
import MainTemplate from '@templates/Main';
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

  return <MainTemplate contents={MainContent} />;
};

export default IndexPage;
