import articleInstance from '../../Model/Article/index.ts';
import categoryInstance from '../../Model/Category/index.ts';

export default {
  article: async () => {
    const dataList = await articleInstance.getArticles();
    const res = dataList
      .map((data: any) => {
        if (data.tags) return data;
        return {
          ...data,
          tags: [],
        };
      })
      .map((data: any) => ({
        ...data,
        mainCategory: {
          id: data.mainCategoryId,
          title: data.mainCategoryTitle,
          classification: data.mainCategoryClassification,
        },
        subCategory: {
          id: data.subCategoryId,
          title: data.subCategoryTitle,
          classification: data.subCategoryClassification,
        },
      }));
    return res;
  },
  getArticle: async (parent: any, args: any) => {
    const data = await articleInstance.getArticle({ slug: args.filter });
    return {
      ...data,
      mainCategory: {
        id: data.mainCategoryId,
        title: data.mainCategoryTitle,
        classification: data.mainCategoryClassification,
      },
      subCategory: {
        id: data.subCategoryId,
        title: data.subCategoryTitle,
        classification: data.subCategoryClassification,
      },
    };
  },
  getCategories: async (parent: any, args: any) => {
    const data = await categoryInstance.getCategories();
    return data;
  },
};
