import Model from '../../lib/Model/index.ts';

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
    return rows;
  }

  reload() {
    console.log('reload');
  }
}

const articleInstance = new CategoryModel();
export default articleInstance;
