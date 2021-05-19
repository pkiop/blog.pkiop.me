import { ISubCategory } from 'components/UI/Sidebar/Category/SubCategory';
import { ICategory } from 'components/UI/Sidebar/Category';

export const subCategoryList: ISubCategory = [
  '테스트 서브 1',
  '테스트 서브 2',
  '테스트 서브 3',
];

export const testCategoryList: ICategory[] = [
  {
    mainCategory: '테스트메인1',
    subCategory: subCategoryList,
  },
  {
    mainCategory: '테스트메인2',
    subCategory: subCategoryList,
  },
];
