import * as React from 'react';
import Headerbar from 'components/organisms/Headerbar';

// styles
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Headerbar />
      Vue2 + Nuxt -> Gatsby 로 블로그 migration중입니다..
    </main>
  );
};

export default IndexPage;
