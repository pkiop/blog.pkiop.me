import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import MainTemplate from 'templates/Main';
// styles

// markup
const IndexPage = () => {
  const MainContent = (
    <>
      <Helmet title="about pkiop " />
      준비중 입니다.
    </>
  );
  return <MainTemplate contents={MainContent} />;
};

export default IndexPage;
