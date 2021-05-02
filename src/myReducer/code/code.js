import * as types from "./../../constanst/code";

// var data = JSON.parse(localStorage.getItem("arrResult"));
var initialState = {
  code: localStorage.getItem('code'),
  redirectCodeQuestion:false
};
var myReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.GET_CODE:

        if(actions.payload.data.data.data.code===actions.payload.data.e){
          localStorage.setItem('code',actions.payload.data.e);
          state={
            code: localStorage.getItem('code'),
            redirectCodeQuestion:true
          }
        }else{
          state={
            code: '',
            redirectCodeQuestion:false
          }
        }
        return state;
    default:
      return state;
  }
};

export default myReducer;
