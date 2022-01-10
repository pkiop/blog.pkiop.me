import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';
import Query from './resolvers/Query.ts';
import Mutation from './resolvers/Mutation.ts';

export const typeDefs = gql`
  type Category {
    id: Int
    title: String!
    classification: String!
    emoji: String
    subCategories: [Category]
  }

  type Tag {
    id: Int
    title: String!
    fontColor: String
    color: String
  }

  scalar Date

  type Article {
    title: String!
    slug: String!
    summary: String!
    mainCategory: Category!
    subCategory: Category!
    tags: [Tag]
    readTime: Float!
    contents: String!
    updateAt: Date!
    showAt: Date
  }

  type Query {
    article(filter: Date): [Article]
    getArticle(filter: String): Article
    getCategories: [Category]
    getTags: [Tag]
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
      showAt: Date
    ): Boolean!
    postCategory(
      title: String!
      classification: String!
      emoji: String
    ): Boolean!
  }
`;

export const resolvers = {
  Query,
  Mutation,
};
