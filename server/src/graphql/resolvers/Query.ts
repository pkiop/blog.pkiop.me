import articleInstance from '../../Model/Article/index.ts';
import categoryInstance from '../../Model/Category/index.ts';
import tagInstance from '../../Model/Tag/index.ts';

export default {
  article: async (parent: any, args: any) => {
    const showAt = new Date(args.filter)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    const dataList = await articleInstance.getArticles(showAt);
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
    const response = data.reduce((acc: any[], category: any) => {
      if (category.classification === 'main') {
        return [...acc, { ...category, subCategories: [] }];
      }
      const findIdx = acc.findIndex(
        (accCategory) => accCategory.title === category.classification
      );
      acc[findIdx].subCategories.push(category);
      return [...acc];
    }, []);
    return response;
  },
  getTags: async (parent: any, args: any) => {
    const data = await tagInstance.getTags();
    return data;
  },
};
