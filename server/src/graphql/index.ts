import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';
import Query from './resolvers/Query.ts';
import Mutation from './resolvers/Mutation.ts';

export const typeDefs = gql`
  type Article {
    title: String!
    slug: String!
    date: String!
    summary: String!
    mainCategory: String!
    subCategory: String!
    tag: [String]
    readTime: Float!
  }

  type Query {
    article: [Article!]
  }

  type Mutation {
    postArticle(
      title: String!
      slug: String!
      date: String!
      summary: String!
      mainCategory: String!
      subCategory: String!
      tag: [String]
      readTime: Float!
    ): Boolean!
  }
`;

export const resolvers = {
  Query,
  Mutation,
};
