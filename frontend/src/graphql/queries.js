/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPkiopblog = /* GraphQL */ `
  query GetPkiopblog($id: ID!) {
    getPkiopblog(id: $id) {
      id
      title
      mainImageLink
      mdContents
      mainCategory
      subCategory
      createAt
      updateAt
    }
  }
`;
export const listPkiopblogs = /* GraphQL */ `
  query ListPkiopblogs(
    $filter: TablePkiopblogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPkiopblogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        mainImageLink
        mdContents
        mainCategory
        subCategory
        createAt
        updateAt
      }
      nextToken
    }
  }
`;
export const listCategories= /* GraphQL */ `
  query listCategories(
    $filter: TableCategoryFilterInput
    $limit: Int
    $nextToken: String
  ){
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sub {
          id
          name
        }
      }
      nextToken
    }
  }
`;
