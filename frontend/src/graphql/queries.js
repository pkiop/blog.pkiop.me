/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPkiopblog = /* GraphQL */ `
  query GetPkiopblog($id: ID!) {
    getPkiopblog(id: $id) {
      id
      title
      mdContents
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
        mdContents
        createAt
        updateAt
      }
      nextToken
    }
  }
`;
