import { ISubCategory } from 'components/UI/Sidebar/Category/SubCategory';
import { ICategory } from 'components/UI/Sidebar/Category';

export const developSubCategoryList: ISubCategory[] = [
  {
    title: 'blog.pkiop.me',
    count: 0,
  },
  {
    title: 'express.js',
    count: 0,
  },
  {
    title: 'backend',
    count: 0,
  },
  {
    title: 'algorithm',
    count: 0,
  },
  {
    title: 'etc',
    count: 0,
  },
];

export const bookSubCategoryLits: ISubCategory[] = [
  { title: '개발', count: 0 },
  { title: '자기계발', count: 0 },
];

export const thinkSubCategoryList: ISubCategory[] = [
  { title: '개발', count: 0 },
  { title: '인생', count: 0 },
];

export const testCategoryList: ICategory[] = [
  {
    mainCategory: { title: '개발', count: 0 },
    emoji: '💻',
    subCategory: developSubCategoryList,
  },
  {
    mainCategory: { title: '책', count: 0 },
    emoji: '📚',
    subCategory: bookSubCategoryLits,
  },
  {
    mainCategory: { title: '생각', count: 0 },
    emoji: '🤔',
    subCategory: thinkSubCategoryList,
  },
];
