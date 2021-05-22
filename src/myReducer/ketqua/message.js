import * as types from "./../../constanst/question";
var initialState = {
  GET_RESULT_SUCCESS: false,
  GET_RESULT_ERROR: false,
  GET_RESULT_LOADING: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_KET_QUA_SUCCESS:
      state = {
        GET_RESULT_SUCCESS: true,
        GET_RESULT_ERROR: false,
        GET_RESULT_LOADING: false,
      };
      return state;

    case types.GET_KET_QUA_LOADING:
      state = {
        GET_RESULT_SUCCESS: false,
        GET_RESULT_ERROR: false,
        GET_RESULT_LOADING: true,
      };
      return state;
    case types.GET_KET_QUA_ERROR:
      state = {
        GET_RESULT_SUCCESS: false,
        GET_RESULT_ERROR: true,
        GET_RESULT_LOADING: false,
      };
      return state;
    case types.GET_KET_QUA_RESET:
      state = {
        GET_RESULT_SUCCESS: false,
        GET_RESULT_ERROR: false,
        GET_RESULT_LOADING: false,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
