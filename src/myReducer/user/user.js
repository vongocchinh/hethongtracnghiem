import * as types from "../../constanst/login";

// var data = JSON.parse(localStorage.getItem("arrResult"));
var initialState = {};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_USER:
        state=actions.data;
      return state;
    default:
      return state;
  }
};


export default myReducer;
