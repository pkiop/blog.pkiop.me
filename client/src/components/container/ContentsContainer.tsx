import React from 'react';
import ContentsList from 'components/UI/ContentsList';
import { ITag } from 'components/UI/Sidebar/TagList/Tag';
import { testTagList } from 'fixture/Tag';
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
  const contentsList = data.allMarkdownRemark.edges.map((edge: any) => {
    return {
      ...edge.node.frontmatter,
      tag: edge.node.frontmatter.tag.map((tag: string) => {
        return {
          title: tag,
          ...(testTagList.find((testTag: ITag) => {
            return testTag.title === tag;
          }) || { color: 'gray', textColor: '#010101' }),
        };
      }),
    };
  });

  return <ContentsList contentsList={contentsList} />;
}

export default ContentsContainer;
