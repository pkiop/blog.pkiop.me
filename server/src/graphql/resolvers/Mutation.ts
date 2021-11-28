import articleInstance from '../../Model/Article/index.ts';
import type { ArticleInput } from '../../Model/Article/index.ts';

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
};
