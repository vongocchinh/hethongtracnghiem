import * as types from "./../../constanst/login";

var data = JSON.parse(localStorage.getItem("idUser"));
var initialState = data ? data : '';
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.idUser:
        state=actions.id;
        localStorage.setItem('idUser',JSON.stringify(actions.id));
      return state;
    default:
      return state;
  }
};


export default myReducer;
