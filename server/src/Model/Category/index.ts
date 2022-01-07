import Model from '../../lib/Model/index.ts';

export type CommonCategory = {
  title: string;
  classification: string;
  emoji: string;
};

export type CategoryInput = {} & CommonCategory;
class CategoryModel extends Model {
  constructor() {
    super();
  }
  async getCategories() {
    const { rows } = await this.query(
      `
        SELECT * FROM category 
      `
    );

    return rows.map((category: any) => {
      if (category.emoji) {
        return {
          ...category,
          emoji: String.fromCodePoint(('0x' + category.emoji) as any),
        };
      }
      return category;
    });
  }

  async postCategory(categoryInput: CategoryInput) {
    const { title, classification, emoji } = categoryInput;

    const { lastInsertId } = await this.query(
      `
      INSERT INTO category(title, classification, emoji)
      VALUES(?, ?, ?)
    `,
      [
        title,
        classification,
        emoji ? (emoji as any).codePointAt(0).toString(16) : null,
      ]
    );

    return true;
  }

  reload() {
    console.log('reload');
  }
}

const articleInstance = new CategoryModel();
export default articleInstance;
