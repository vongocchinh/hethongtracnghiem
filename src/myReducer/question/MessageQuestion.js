import * as types from "./../../constanst/question";

var initialState = {
  get_question_loading: false,
  get_question_error: false,
  get_question_success: false,
  get_question_success_error: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_QUESTION_LOADING:
      state = {
        get_question_loading: true,
        get_question_error: false,
        get_question_success: false,
      };
      return state;
    case types.GET_QUESTION_ERROR:
      state = {
        get_question_loading: false,
        get_question_error: true,
        get_question_success: false,
      };
      return state;
    case types.GET_QUESTION_SUCCESS:
      state = {
        get_question_loading: false,
        get_question_error: false,
        get_question_success: true,
      };
      return state;
    case types.RESET_QUESTION_SUCCESS:
      state = {
        get_question_loading: false,
        get_question_error: false,
        get_question_success: false,
      };
      return state;
    case types.GET_QUESTION_SUCCESS_ERROR:
      state = {
        get_question_loading: false,
        get_question_error: false,
        get_question_success: false,
        get_question_success_error: true,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
