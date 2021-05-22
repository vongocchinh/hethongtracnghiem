import * as types from "./../../constanst/category";
var initialState = {
  GET_CATEGORY_SUCCESS: false,
  GET_CATEGORY_ERROR: false,
  GET_CATEGORY_LOADING: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_CATEGORY_ALL_SUCCESS:
      state = {
        GET_CATEGORY_SUCCESS: true,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
      };
      return state;

    case types.GET_CATEGORY_ALL_LOADING:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: true,
      };
      return state;
    case types.GET_CATEGORY_ALL_ERROR:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: true,
        GET_CATEGORY_LOADING: false,
      };
      return state;
    case types.GET_CATEGORY_ALL_RESET:
      state = {
        GET_CATEGORY_SUCCESS: false,
        GET_CATEGORY_ERROR: false,
        GET_CATEGORY_LOADING: false,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
