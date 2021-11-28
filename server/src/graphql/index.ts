import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';
import Query from './resolvers/Query.ts';
import Mutation from './resolvers/Mutation.ts';

export const typeDefs = gql`
  type Category {
    title: String!
    classification: String!
  }

  type Article {
    title: String!
    slug: String!
    createAt: String!
    updateAt: String!
    summary: String!
    mainCategory: Category!
    subCategory: Category!
    tag: [String]
    readTime: Float!
  }

  type Query {
    article: [Article]
  }

  # input CategoryInput {
  #   title: String!
  #   classification: String!
  # }

  type Mutation {
    postArticle(
      title: String!
      slug: String!
      createAt: String!
      updateAt: String!
      summary: String!
      mainCategoryId: Int!
      subCategoryId: Int!
      tagIds: [String]
      readTime: Float!
    ): Boolean!
  }
`;

export const resolvers = {
  Query,
  Mutation,
};
