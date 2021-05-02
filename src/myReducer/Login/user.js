import * as types from "./../../constanst/login";
var initialState ={};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_RULES:
      state=actions.data;
      return state;
    default:
      return state;
  }
};
export default myReducer;
