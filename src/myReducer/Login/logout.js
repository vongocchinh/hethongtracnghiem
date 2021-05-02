import * as types from "./../../constanst/login";
var initialState = {
  logout_success: false,
  logout_loading: false,
  logout_error: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.LOGOUT_USER_SUCCESS:
      state = {
        logout_success: true,
        logout_loading: false,
        logout_error: false,
      };
      return state;
    case types.LOGOUT_USER_LOADING:
      state = {
        logout_success: false,
        logout_loading: true,
        logout_error: false,
      };
      return state;
    case types.LOGOUT_USER_ERROR:
      state = {
        logout_success: false,
        logout_loading: false,
        logout_error: true,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
