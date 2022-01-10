import { Tag } from './tag.interface';

export interface Content {
  title: string;
  slug: string;
  summary: string;
  mainCategoryId: number;
  subCategoryId: number;
  readTime: number;
  contents: string;
  tags?: Tag[];
}
