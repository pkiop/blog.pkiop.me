import articleInstance from '../../Model/Article/index.ts';

export default {
  article: async () => articleInstance.getArticles(),
};
