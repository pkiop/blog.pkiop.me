import { ISubCategory } from 'components/UI/Sidebar/Category/SubCategory';
import { ICategory } from 'components/UI/Sidebar/Category';

export const subCategoryList1: ISubCategory[] = [
  {
    title: 'blog.pkiop.me',
    count: 0,
  },
  {
    title: 'lifemanager',
    count: 0,
  },
];
export const subCategoryList2: ISubCategory[] = [
  { title: '개발', count: 0 },
  { title: '돈', count: 0 },
  { title: '자기계발', count: 0 },
];
export const thinkCategoryList: ISubCategory[] = [
  { title: '개발', count: 0 },
  { title: '인생', count: 0 },
  { title: '돈', count: 0 },
];

export const testCategoryList: ICategory[] = [
  {
    mainCategory: { title: '개발', count: 0 },
    emoji: '💻',
    subCategory: subCategoryList1,
  },
  {
    mainCategory: { title: '책', count: 0 },
    emoji: '📚',
    subCategory: subCategoryList2,
  },
  {
    mainCategory: { title: '생각', count: 0 },
    emoji: '🤔',
    subCategory: thinkCategoryList,
  },
];
