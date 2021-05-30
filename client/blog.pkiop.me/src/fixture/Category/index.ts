import { ISubCategory } from 'components/UI/Sidebar/Category/SubCategory';
import { ICategory } from 'components/UI/Sidebar/Category';

export const subCategoryList1: ISubCategory = ['blog.pkiop.me', 'lifemanager'];
export const subCategoryList2: ISubCategory = ['javascript', '기타'];

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
];
