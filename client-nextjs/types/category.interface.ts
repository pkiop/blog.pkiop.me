export interface IMainCategory {
  title: string;
  count: number;
}
export interface ISubCategory {
  title: string;
  count: number;
}

/* Deprecated */
export interface ICategory {
  mainCategory: IMainCategory;
  emoji: string;
  subCategory: ISubCategory[];
}

export interface Category {
  classification: string;
  emoji: string;
  id: number;
  subCategories?: Category;
  title: string;
}
