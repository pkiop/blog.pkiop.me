import type { IMainCategory, ISubCategory } from './category.interface';
import type { ITag } from './tag.interface';

export interface IContent {
  title: string;
  date: string;
  slug: string;
  mainCategory: IMainCategory;
  subCategory: ISubCategory;
  tags: ITag[];
  // 아래 임시 타입. 수정 필요
  contents?: string;
  html?: string;
}
