import Model from '../../lib/Model/index.ts';
import { MainCategory, SubCategory } from '../../types/category.ts';
import tagInatance from '../Tag/index.ts';

export type CommonArticle = {
  tags: string[];
  title: string;
  summary: string;
  slug: string;
  readTime: number;
  contents: string;
};

export type ArticleInput = {
  mainCategoryId: number;
  subCategoryId: number;
} & CommonArticle;

export type Article = {
  createAt: Date;
  updateAt: Date;
  mainCategory: MainCategory;
  subCategory: SubCategory;
} & CommonArticle;

class ArticleModel extends Model {
  constructor() {
    super();
  }
  async getArticle(filter: any) {
    const { rows } = await this.query(
      `
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
    INNER JOIN category AS SubCategory ON article.subCategoryId=SubCategory.id

    WHERE slug=?
  `,
      ['/' + filter.slug]
    );
    return rows[0];
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
      INNER JOIN category AS SubCategory ON article.subCategoryId=SubCategory.id
    `);
    // TODO: taglist 가져오기
    // query한번에 가능한건가..? 배열로 받아와야해서
    // 2번이라면 articleNum * article 태그리스트 만큼 쿼리 날려야하는데 더 좋은 방법 메모 후 연구
    return rows;
  }

  async postArticle(articleInput: ArticleInput) {
    const {
      title,
      summary,
      slug,
      readTime,
      contents,
      tags,
      mainCategoryId,
      subCategoryId,
    } = articleInput;

    const { lastInsertId } = await this.query(
      `
      INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)
    `,
      [
        title,
        summary,
        new Date(),
        new Date(),
        slug,
        mainCategoryId,
        subCategoryId,
        readTime,
        contents,
      ]
    );

    if (tags) {
      const tagIdList = tags.map(async (tagName) => {
        const { rows } = await this.query(
          `
          SELECT *

          FROM tag

          WHERE title=?
        `,
          [tagName]
        );

        let tagId;
        if (rows.length === 0) {
          tagId = await tagInatance.postTag(tagName);
        } else {
          tagId = rows[0].id;
        }
        return tagId;
      });
      tagIdList.forEach(async (tagId) => {
        await this.query(
          `
          INSERT INTO article_tag(articleId, tagId)
          VALUES(?, ?)
        `,
          [lastInsertId, await tagId]
        );
      });
    }
    return true;
  }

  deleteArticle() {}

  reload() {
    console.log('reload');
  }
}

const articleInstance = new ArticleModel();
export default articleInstance;
