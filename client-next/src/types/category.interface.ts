export interface IMainCategory {
  title: string;
  count: number;
}
export interface ISubCategory {
  title: string;
  count: number;
}

export interface ICategory {
  mainCategory: IMainCategory;
  emoji: string;
  subCategory: ISubCategory[];
}
