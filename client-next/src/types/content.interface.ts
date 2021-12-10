import type { IMainCategory, ISubCategory } from './category.interface';
import type { ITag } from './tag.interface';

export interface IContent {
  title: string;
  date: string;
  slug: string;
  mainCategory: IMainCategory;
  subCategory: ISubCategory;
  tags: ITag[];
}
