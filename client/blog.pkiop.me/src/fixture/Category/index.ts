import { ISubCategory } from 'components/UI/Sidebar/Category/SubCategory';
import { ICategory } from 'components/UI/Sidebar/Category';

export const subCategoryList1: ISubCategory = ['blog.pkiop.me', 'lifemanager'];
export const subCategoryList2: ISubCategory = ['개발', '돈', '자기계발'];
export const thinkCategoryList: ISubCategory = [
  '개발',
  '인생',
  '인간관계',
  '돈',
];

export const testCategoryList: ICategory[] = [
  {
    mainCategory: '개발',
    emoji: '💻',
    subCategory: subCategoryList1,
  },
  {
    mainCategory: '책',
    emoji: '📚',
    subCategory: subCategoryList2,
  },
  {
    mainCategory: '생각',
    emoji: '🤔',
    subCategory: thinkCategoryList,
  },
];
