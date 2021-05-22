import * as types from "./../../constanst/login";
var initialState = {
  GET_USER_ONLINE_SUCCESS: false,
  GET_USER_ONLINE_ERROR: false,
  GET_USER_ONLINE_LOADING: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_USER_ONLINE_SUCCESS:
      state = {
        GET_USER_ONLINE_SUCCESS: true,
        GET_USER_ONLINE_ERROR: false,
        GET_USER_ONLINE_LOADING: false,
      };
      return state;

    case types.GET_USER_ONLINE_LOADING:
      state = {
        GET_USER_ONLINE_SUCCESS: false,
        GET_USER_ONLINE_ERROR: false,
        GET_USER_ONLINE_LOADING: true,
      };
      return state;
    case types.GET_USER_ONLINE_ERROR:
      state = {
        GET_USER_ONLINE_SUCCESS: false,
        GET_USER_ONLINE_ERROR: true,
        GET_USER_ONLINE_LOADING: false,
      };
      return state;
    case types.GET_USER_ONLINE_RESET:
      state = {
        GET_USER_ONLINE_SUCCESS: false,
        GET_USER_ONLINE_ERROR: false,
        GET_USER_ONLINE_LOADING: false,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
