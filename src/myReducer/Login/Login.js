import * as types from "./../../constanst/login";
var initialState = {
  login_success: false,
  login_loading: false,
  login_error: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.LOGIN_USER_SUCCESS:
      state = {
        login_success: true,
        login_loading: false,
        login_error: false,
      };
      return state;
    case types.LOGIN_USER_LOADING:
      state = {
        login_success: false,
        login_loading: true,
        login_error: false,
      };
      return state;
    case types.LOGIN_USER_ERROR:
      state = {
        login_success: false,
        login_loading: false,
        login_error: true,
      };
      return state;

    case types.RESET_MESSAGE_USER:
      state={
        login_success: false,
        login_loading: false,
        login_error: false,
      }
      return state;
    default:
      return state;
  }
};

export default myReducer;
