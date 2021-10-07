import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import LaboratoryTemplate from 'templates/Laboratory';
// styles

// markup
const IndexPage = () => {
  const MainContent = (
    <>
      <Helmet title="Laboratory" />
      준비중 입니다.
    </>
  );
  return <LaboratoryTemplate contents={MainContent} />;
};

export default IndexPage;
