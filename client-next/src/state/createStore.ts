import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import * as api from '@api/index';

const SET_MAIN_CATEGORIES = 'SET_MAIN_CAREGORIES';
const SET_SUB_CATEGORIES = 'SET_SUB_CATEGORIES';
const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING';
const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';
const SET_MAIN_CATEGORY = 'SET_MAIN_CATEGORY';
const SET_SUB_CATEGORY = 'SET_SUB_CATEGORY';
const ADD_TAG = 'ADD_TAG';
const REMOVE_TAG = 'REMOVE_TAG';
const TOGGLE_TAG = 'TOGGLE_TAG';
const CLEAR_FILTER = 'CLEAR_FILTER';
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

export const setMainCategories = (mainCategory: string) => ({
  type: SET_MAIN_CATEGORIES,
  payload: mainCategory,
});
export const setSubCategories = (mainCategory: string) => ({
  type: SET_SUB_CATEGORIES,
  payload: mainCategory,
});
export const setMainCategory = (mainCategory: string) => ({
  type: SET_MAIN_CATEGORY,
  payload: mainCategory,
});
export const setSubCategory = (mainCategory: string, subCategory: string) => ({
  type: SET_SUB_CATEGORY,
  payload: {
    mainCategory,
    subCategory,
  },
});
export const addTag = (tag: string) => ({ type: ADD_TAG, payload: tag });
export const removeTag = (tag: string) => ({ type: REMOVE_TAG, payload: tag });
export const toggleTag = (tag: string) => ({ type: TOGGLE_TAG, payload: tag });
export const clearFilter = () => ({
  type: CLEAR_FILTER,
});
export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const getCategories = () => async (dispatch: any, getState: any) => {
  dispatch({ type: GET_CATEGORIES_PENDING });
  try {
    const response = await api.getCategories();
    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: response });
  } catch (err) {
    dispatch({ type: GET_CATEGORIES_FAILURE, payload: err });
  }
};

export const initialState = {
  mainCategory: '',
  subCategory: '',
  tag: [] as string[],
  isSidebarOpen: false,
  categories: [] as any[],
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case SET_MAIN_CATEGORY:
      return {
        ...state,
        mainCategory: action.payload,
        subCategory: '',
      };
    case SET_SUB_CATEGORY:
      return {
        ...state,
        mainCategory: action.payload.mainCategory,
        subCategory: [...state.subCategory, action.payload.subCategory],
      };
    case ADD_TAG:
      return {
        ...state,
        tag: [...state.tag, action.payload].sort(),
      };
    case REMOVE_TAG:
      return {
        ...state,
        tag: [...state.tag.filter((el: any) => el !== action.payload)].sort(),
      };
    case TOGGLE_TAG:
      return {
        ...state,
        tag: state.tag.includes(action.payload)
          ? [...state.tag.filter((el: any) => el !== action.payload)].sort()
          : [...state.tag, action.payload].sort(),
      };
    case CLEAR_FILTER:
      return { ...initialState, isSidebarOpen: state.isSidebarOpen };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return initialState;
  }
}

export default (preloadedState: any) => {
  if (!preloadedState) console.warn('no preloadedState');
  return createStore(
    reducer as any,
    preloadedState,
    applyMiddleware(ReduxThunk),
  );
};
