/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPkiopblog = /* GraphQL */ `
  mutation CreatePkiopblog($input: CreatePkiopblogInput!) {
    createPkiopblog(input: $input) {
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
export const updatePkiopblog = /* GraphQL */ `
  mutation UpdatePkiopblog($input: UpdatePkiopblogInput!) {
    updatePkiopblog(input: $input) {
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
export const deletePkiopblog = /* GraphQL */ `
  mutation DeletePkiopblog($input: DeletePkiopblogInput!) {
    deletePkiopblog(input: $input) {
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

// 함수만 실행시키면 1 올라가도록 하고 싶은데..
export const increaseVisitCnt = /* GraphQL */ `
  mutation IncreaseVisitCnt() {
    increaseVisitCnt() {
    }
  }
`;
