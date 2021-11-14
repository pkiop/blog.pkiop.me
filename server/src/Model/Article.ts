import Model from '../lib/Model/index.ts';
import { MainCategory, SubCategory } from '../types/category.ts';

type ArticleColumns = {
  tag: string[];
  title: string;
  summary: string;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  readTime: number;
};
export default class ArticleModel extends Model {
  constructor() {
    super();
  }

  reload() {
    console.log('reload');
  }
}
