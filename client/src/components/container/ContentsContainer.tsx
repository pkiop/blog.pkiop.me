import React from 'react';
import ContentsList from 'components/UI/ContentsList';
import { graphql, useStaticQuery } from 'gatsby';

function ContentsContainer() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              slug
              mainCategory
              subCategory
              tag
            }
          }
        }
      }
    }
  `);
  const contentsList = data.allMarkdownRemark.edges.map(
    (el: any) => el.node.frontmatter
  );

  return (
    <div>
      <ContentsList contentsList={contentsList} />
    </div>
  );
}

export default ContentsContainer;
