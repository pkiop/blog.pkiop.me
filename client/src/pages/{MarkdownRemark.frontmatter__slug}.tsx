import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Utterances from 'components/UI/Utterances';
import Posts from 'components/UI/Posts';
import styled from 'styled-components';
import MainTemplate from 'templates/Main';

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

  const Contents = (
    <Wrapper>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.summary} />
        <meta name="keywords" content={frontmatter.tag.join(', ')} />
        <html lang="ko" />
      </Helmet>
      <PostWrapper>
        <Posts frontmatter={frontmatter} html={html} />
      </PostWrapper>
      <Utterances />
    </Wrapper>
  );
  return <MainTemplate contents={Contents} />;
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        summary
        tag
      }
    }
  }
`;
