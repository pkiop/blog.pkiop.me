import { gql } from 'https://deno.land/x/graphql_tag@0.0.1/mod.ts';
import type { MainCategory, SubCategory } from '../types/category.ts';

type Article = {
  title: String;
  slug: String;
  date: Date;
  summary: String;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  tag: String[];
  readTime: number;
};

/* 
slug: '/algorithm-of-luck'
date: '2021-09-24'
title: '잘될 운명으로 가는 운의 알고리즘'
summary: '잘될 운명으로 가는 운의 알고리즘을 읽고 든 생각'
mainCategory: '책'
subCategory: '자기계발'
tag: []
readTime: 2
*/

const testArticle: Article[] = [];

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
  Query: {
    article: () => testArticle,
  },
  Mutation: {
    postArticle(parent: any, args: any) {
      testArticle.push(args);
      return true;
    },
  },
};
