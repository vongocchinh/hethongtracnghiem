import * as types from "./../../constanst/result";

var initialState=[];
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_INTRODUCE_SUCCESS:
        state=actions.data;
        return state;
    default:
      return state;
  }
};

export default myReducer;
