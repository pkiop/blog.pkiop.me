import React from 'react';
import { testCategoryList } from 'fixture/Category';
import Sidebar from 'components/UI/Sidebar';
import { graphql, useStaticQuery } from 'gatsby';

function SidebarContainer() {
  const staticData = useStaticQuery(graphql`
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

  const mainCategoryDatas = staticData.allMarkdownRemark.edges.reduce(
    (acc: any, edges: any) => {
      const value = edges.node.frontmatter;
      if (value.mainCategory in acc) {
        return {
          ...acc,
          [value.mainCategory]: acc[value.mainCategory] + 1,
        };
      }
      return {
        ...acc,
        [value.mainCategory]: 1,
      };
    },
    {},
  );
  const subCategoryDatas = staticData.allMarkdownRemark.edges.reduce(
    (acc: any, edges: any) => {
      const value = edges.node.frontmatter;
      if (value.subCategory in acc) {
        return {
          ...acc,
          [value.subCategory]: acc[value.subCategory] + 1,
        };
      }
      return {
        ...acc,
        [value.subCategory]: 1,
      };
    },
    {},
  );
  const data = testCategoryList.map((testCategory: any) => {
    return {
      ...testCategory,
      mainCategory: {
        title: testCategory.mainCategory,
        count: mainCategoryDatas[testCategory.mainCategory],
      },
      subCategory: testCategory.subCategory.map((subCategoryText: any) => {
        return {
          title: subCategoryText,
          count: subCategoryDatas[subCategoryText],
        };
      }),
    };
  });
  return <Sidebar categoryList={data} />;
}

export default SidebarContainer;
