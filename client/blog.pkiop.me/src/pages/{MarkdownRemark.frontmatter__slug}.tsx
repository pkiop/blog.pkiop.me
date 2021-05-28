import React from 'react';
import { graphql } from 'gatsby';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Posts from 'components/UI/Posts';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <GlobalThemeProvider>
      <Posts frontmatter={frontmatter} html={html}/>
    </GlobalThemeProvider>
  );
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
