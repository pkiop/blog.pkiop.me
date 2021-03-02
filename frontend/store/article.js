export const state = () => ({
  mainCategory:'',
  subCategory: '', 
});

export const getters = {
  getMainCategory(state) {
    return state.mainCategory;
  },
  getSubCategory(state) {
    return state.subCategory;
  }
};

export const mutations = {
  setMainCategory(state, mainCategory) {
    state.mainCategory = mainCategory;
  },
  setSubCategory(state, subCategory) {
    state.subCategory = subCategory;
  }
};