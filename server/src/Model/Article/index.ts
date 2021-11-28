import Model from '../../lib/Model/index.ts';
import { MainCategory, SubCategory } from '../../types/category.ts';

export type Article = {
  tag: string[];
  title: string;
  summary: string;
  createAt: Date;
  updateAt: Date;
  slug: string;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  readTime: number;
  contents: String;
};

class ArticleModel extends Model {
  constructor() {
    super();
  }

  async getArticles() {
    return this.query(`SELECT * FROM article`);
  }

  reload() {
    console.log('reload');
  }
}

const articleInstance = new ArticleModel();
export default articleInstance;
