import * as types from "./../../constanst/message";


var initialState = {
  get_course_loading: false,
  get_course_error: false,
  get_course_success: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_COURSE_SUCCESS:
      state = {
        get_course_loading: false,
        get_course_error: false,
        get_course_success: true,
      };
      return state;
    case types.GET_COURSE_LOADING:
      state = {
        get_course_loading: true,
        get_course_error: false,
        get_course_success: false,
      };
      return state;

    default:
      return state;
  }
};

export default myReducer;
