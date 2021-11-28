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
    const { rows } = await this.query(`
      SELECT *,
      article.title as title,
      MainCategory.id AS mainCategoryId,
      MainCategory.title AS mainCategoryTitle,
      MainCategory.classification AS mainCategoryClassification,
      SubCategory.id AS subCategoryId,
      SubCategory.title AS subCategoryTitle,
      SubCategory.classification AS subCategoryClassification

      FROM article

      INNER JOIN category AS MainCategory ON article.mainCategoryId=MainCategory.id
      INNER JOIN category AS SubCategory ON article.subCategoryId=SubCategory.id;
  `);
    return rows;
  }

  reload() {
    console.log('reload');
  }
}

const articleInstance = new ArticleModel();
export default articleInstance;
