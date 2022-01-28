import * as React from 'react';
import { Helmet } from 'react-helmet';
import LaboratoryTemplate from 'templates/Laboratory';
import Research from 'components/Laboratory/Research';
// styles

// markup
const IndexPage = () => {
  const MainContent = (
    <>
      <Helmet title="PKIOP LAB" />
      <Research />
    </>
  );
  return <LaboratoryTemplate contents={MainContent} />;
};

export default IndexPage;
