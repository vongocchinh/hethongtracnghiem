import * as types from "./../../constanst/category";
var initialState = {
  GET_CATEGORY_DETAIL_SUCCESS: false,
  GET_CATEGORY_DETAIL_ERROR: false,
  GET_CATEGORY_DETAIL_LOADING: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_CATEGORY_DETAIL_SUCCESS:
      state = {
        GET_CATEGORY_DETAIL_SUCCESS: true,
        GET_CATEGORY_DETAIL_ERROR: false,
        GET_CATEGORY_DETAIL_LOADING: false,
      };
      return state;

    case types.GET_CATEGORY_DETAIL_LOADING:
      state = {
        GET_CATEGORY_DETAIL_SUCCESS: false,
        GET_CATEGORY_DETAIL_ERROR: false,
        GET_CATEGORY_DETAIL_LOADING: true,
      };
      return state;
    case types.GET_CATEGORY_DETAIL_ERROR:
      state = {
        GET_CATEGORY_DETAIL_SUCCESS: false,
        GET_CATEGORY_DETAIL_ERROR: true,
        GET_CATEGORY_DETAIL_LOADING: false,
      };
      return state;
    case types.GET_CATEGORY_DETAIL_RESET:
      state = {
        GET_CATEGORY_DETAIL_SUCCESS: false,
        GET_CATEGORY_DETAIL_ERROR: false,
        GET_CATEGORY_DETAIL_LOADING: false,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
