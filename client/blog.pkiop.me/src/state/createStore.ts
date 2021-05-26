import { createStore } from 'redux';

const SET_MAIN_CATEGORY = 'SET_MAIN_CATEGORY';
const SET_SUB_CATEGORY = 'SET_SUB_CATEGORY';
const ADD_TAG = 'ADD_TAG';
const REMOVE_TAG = 'REMOVE_TAG';
const TOGGLE_TAG = 'TOGGLE_TAG';
const CLEAR_FILTER = 'CLEAR_FILTER';

export const setMainCategory = (mainCategory: string) => ({
  type: SET_MAIN_CATEGORY,
  payload: mainCategory,
});
export const setSubCategory = (subCategory: string) => ({
  type: SET_SUB_CATEGORY,
  payload: subCategory,
});
export const addTag = (tag: string) => ({ type: ADD_TAG, payload: tag });
export const removeTag = (tag: string) => ({ type: REMOVE_TAG, payload: tag });
export const toggleTag = (tag: string) => ({ type: TOGGLE_TAG, payload: tag });
export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

export const initialState = {
  mainCategory: '',
  subCategory: '',
  tag: [] as string[],
};

function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_MAIN_CATEGORY:
      return {
        ...state,
        mainCategory: action.payload,
      };
    case SET_SUB_CATEGORY:
      return {
        ...state,
        subCategory: action.payload,
      };
    case ADD_TAG:
      return {
        ...state,
        tag: [...state.tag, action.payload].sort(),
      };
    case REMOVE_TAG:
      return {
        ...state,
        tag: [...state.tag.filter((el) => el !== action.payload)].sort(),
      };
    case TOGGLE_TAG:
      return {
        ...state,
        tag: state.tag.includes(action.payload)
          ? [...state.tag.filter((el) => el !== action.payload)].sort()
          : [...state.tag, action.payload].sort(),
      };
    case CLEAR_FILTER:
      return { ...initialState };
    default:
      return state;
  }
}

// preloadedState will be passed in by the plugin
export default (preloadedState: any) => {
  return createStore(reducer, preloadedState);
};
