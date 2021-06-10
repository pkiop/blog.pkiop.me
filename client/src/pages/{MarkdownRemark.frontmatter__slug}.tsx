import React from 'react';
import { graphql } from 'gatsby';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Utterances from 'components/UI/Utterances';
import Posts from 'components/UI/Posts';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PostWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <GlobalThemeProvider>
      <Wrapper>
        <PostWrapper>
          <Posts frontmatter={frontmatter} html={html} />
        </PostWrapper>
        <Utterances />
      </Wrapper>
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
