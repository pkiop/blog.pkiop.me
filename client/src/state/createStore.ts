import { createStore } from 'redux';

const SET_MAIN_CATEGORY = 'SET_MAIN_CATEGORY';
const SET_SUB_CATEGORY = 'SET_SUB_CATEGORY';
const ADD_TAG = 'ADD_TAG';
const REMOVE_TAG = 'REMOVE_TAG';
const TOGGLE_TAG = 'TOGGLE_TAG';
const CLEAR_FILTER = 'CLEAR_FILTER';
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
const SET_DARKMODE = 'SET_DARKMODE';

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
export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});
export const toggleDarkMode = () => ({
  type: TOGGLE_DARKMODE,
});
export const setDarkMode = () => ({
  type: SET_DARKMODE,
});

type ReduxState = {
  mainCategory: string;
  subCategory: string;
  tag: string[];
  isSidebarOpen: boolean;
  isDarkMode: boolean;
};

export const initialState: ReduxState = {
  mainCategory: '',
  subCategory: '',
  tag: [],
  isSidebarOpen: false,
  isDarkMode: false,
};

function reducer(state = initialState, action: any) {
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
      return {
        ...initialState,
        isSidebarOpen: state.isSidebarOpen,
        isDarkMode: state.isDarkMode,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case TOGGLE_DARKMODE:
      localStorage.setItem('isDarkMode', state.isDarkMode ? 'false' : 'true');
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case SET_DARKMODE:
      return {
        ...state,
        isDarkMode: localStorage.getItem('isDarkMode') === 'true',
      };
    default:
      return state;
  }
}

// preloadedState will be passed in by the plugin
export default (preloadedState: any) => {
  return createStore(reducer, preloadedState);
};
