import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import MainTemplate from '@templates/Main';
import styled from 'styled-components';
import PostContainer from '@components/container/PostContainer';

const IndexPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 94%;

  @media (min-width: 980px) {
    width: 980px;
  }
`;

const PostContent = (
  <IndexPageWrapper>
    <ContentsWrapper>
      <PostContainer />
    </ContentsWrapper>
  </IndexPageWrapper>
);

const SlugPage: NextPage = () => {
  return <MainTemplate contents={PostContent} />;
};

export default SlugPage;
