import articleInstance from '../../Model/Article/index.ts';
import categoryInstance from '../../Model/Category/index.ts';
import type { ArticleInput } from '../../Model/Article/index.ts';
import type { CategoryInput } from '../../Model/Category/index.ts';

export default {
  async postArticle(parent: any, args: ArticleInput) {
    try {
      await articleInstance.postArticle(args);
      return true;
    } catch (err) {
      console.error('POST ERROR');
      return err;
    }
  },
  async postCategory(parent: any, args: CategoryInput) {
    try {
      await categoryInstance.postCategory(args);
      return true;
    } catch (err) {
      console.error('POST ERROR');
      return err;
    }
  },
};
