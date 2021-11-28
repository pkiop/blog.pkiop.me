import Model from '../../lib/Model/index.ts';

class TagModel extends Model {
  constructor() {
    super();
  }

  async postTag(
    tagName: string,
    fontColor: string = '#ffffff',
    color: string = '#000000'
  ) {
    try {
      const { lastInsertId } = await this.query(
        `
          INSERT INTO tag(title, fontColor, color)
          VALUES(?, ?, ?)
        `,
        [tagName, fontColor, color]
      );
      return lastInsertId;
    } catch (err) {
      throw err;
    }
  }

  async changeTagColor(fontColor: string, backgroundColor: string) {
    // TODO: change color
  }

  reload() {
    console.log('reload');
  }
}

const tagInstance = new TagModel();
export default tagInstance;
