import * as types from "./../../constanst/result";

var data = JSON.parse(localStorage.getItem("arrResult"));
var initialState = data ? data : [];
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.ADD_RESULT:
      var item = actions.payload.data;
      var index = finIndex(state, item.id);
      if (index === -1) {
        state.push(actions.payload.data);
      } else {
        state[index] = item;
      }
      localStorage.setItem("arrResult", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

const finIndex = (data, id) => {
  var k = -1;
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].id);
    // console.log(id);
    if (data[i].id === id) {
      k = i;
    }
  }
  return k;
};

export default myReducer;
