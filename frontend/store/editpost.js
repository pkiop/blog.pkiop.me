export const state = () => ({
  mainCategory:'',
  subCategory: '', 
});

export const mutations = {
  setMainCategory(state, mainCategory) {
    state.mainCategory = mainCategory;
  },
  setSubCategory(state, subCategory) {
    state.subCategory = subCategory;
  }
};