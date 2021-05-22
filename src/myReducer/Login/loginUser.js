import * as types from "../../constanst/login";
import * as types1 from "../../constanst/code";
var initialState =JSON.parse(localStorage.getItem('user'));
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.LOGIN_USER_SUCCESS:
      localStorage.setItem('user',JSON.stringify(actions.id));
      state=actions.id;
      return state;

    case types1.GET_USER_ID_SUCCESS:
      localStorage.setItem('user',JSON.stringify(actions.id));
      state=actions.id;
      return state;
    case types1.GET_USER_ID_ERROR:
        localStorage.setItem('user',JSON.stringify(''));
        state='';
        return state;
    case types.LOGOUT_USER_SUCCESS:
      state='';
      localStorage.clear();
    return state;
    default:
      return state;
  }
};


export default myReducer;
