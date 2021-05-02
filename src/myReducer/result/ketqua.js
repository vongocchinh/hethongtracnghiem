import * as types from "./../../constanst/result";

// var data = JSON.parse(localStorage.getItem("arrResult"));
var initialState = {
  redirectKetQua: false,
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.FINISH_RESULT:
      state = {
        redirectKetQua: true,
      };
      localStorage.removeItem("arrResult");
      return state;
    case types.RESET_KQ:
      state = {
        redirectKetQua: false,
      };
      return state;
    default:
      return state;
  }
};

export default myReducer;
