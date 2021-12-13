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
    summary: String!
    mainCategory: Category!
    subCategory: Category!
    tags: [String]
    readTime: Float!
    contents: String!
    updateAt: String!
  }

  type Query {
    article: [Article]
    getArticle(filter: String): Article
  }

  # input CategoryInput {
  #   title: String!
  #   classification: String!
  # }

  type Mutation {
    postArticle(
      title: String!
      slug: String!
      summary: String!
      mainCategoryId: Int!
      subCategoryId: Int!
      tags: [String]
      readTime: Float!
      contents: String!
    ): Boolean!
  }
`;

export const resolvers = {
  Query,
  Mutation,
};
