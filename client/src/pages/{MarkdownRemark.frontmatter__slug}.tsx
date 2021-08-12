import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Utterances from 'components/UI/Utterances';
import Posts from 'components/UI/Posts';
import styled from 'styled-components';
import MainTemplate from 'templates/Main';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <iframe
          src="https://ads-partners.coupang.com/widgets.html?id=488028&template=carousel&trackingCode=AF1679783&subId=&width=680&height=140"
          width="680"
          height="140"
          frameBorder="0"
          scrolling="no"
          referrerPolicy="unsafe-url"
        ></iframe>
        <a
          style={{ color: '#539bf5', fontSize: '1.3rem', margin: '1.8rem' }}
          href="https://coupa.ng/b5eXs7"
        >
          이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를
          제공받습니다.
        </a>
      </div>

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
        readTime
      }
    }
  }
`;
