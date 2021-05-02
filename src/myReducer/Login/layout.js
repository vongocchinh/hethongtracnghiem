import * as types from "./../../constanst/login";
var initialState =JSON.parse(localStorage.getItem('apiuid'));
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.LOGIN_USER_SUCCESS:
      // console.log(actions);
      state=actions.id;
      return state;
    case types.LOGOUT_USER_SUCCESS:
      state=''
    return state;
    default:
      return state;
  }
};


export default myReducer;
