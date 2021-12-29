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
  showAt: Date;
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

    WHERE showAt < now() AND slug=?
  `,
      ['/' + filter.slug]
    );
    return rows[0];
  }

  async getArticles(showAt: string) {
    console.log('filter.showAt : ', showAt);
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

      ${showAt ? `WHERE showAt < "${showAt}"` : ''} 
    `);

    // TODO: taglist 가져오기
    // query한번에 가능한건가..? 배열로 받아와야해서
    // 2번이라면 articleNum * article 태그리스트 만큼 쿼리 날려야하는데 더 좋은 방법 메모 후 연구

    //  WHERE showAt < now() 를 추가했었는데 graphql에서 선택해서 가져가도록 두는게 좋을 것 같아 제거

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
      showAt,
    } = articleInput;

    const { lastInsertId } = await this.query(
      `
      INSERT INTO article(title, summary, createAt, updateAt, slug, mainCategoryId, subCategoryId, readTime, contents, showAt)
      VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
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
        showAt,
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
