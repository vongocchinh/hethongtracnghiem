import * as types from "./../../constanst/result";

var initialState = {
  get_introduce_loading: false,
  get_introduce_error: false,
  get_introduce_success: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_INTRODUCE_SUCCESS:
      state = {
        get_introduce_loading: false,
        get_introduce_error: false,
        get_introduce_success: true,
      };
      return state;
    case types.GET_INTRODUCE_LOADING:
      state = {
        get_introduce_loading: true,
        get_introduce_error: false,
        get_introduce_success: false,
      };
      return state;
    case types.GET_INTRODUCE_ERROR:
      state = {
        get_introduce_loading: false,
        get_introduce_error: true,
        get_introduce_success: false,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
