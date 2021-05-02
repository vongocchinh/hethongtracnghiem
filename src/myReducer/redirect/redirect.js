

import * as types from './../../constanst/redirect';


var initialState={
    redirect:false,
    id:''
};
var myReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case types.SET_REDIRECT_THI:
            state={
                redirect:true,
                id:actions.id
            };
            return state;
        case types.SET_REDIRECT_THI_RESET:
            state={
                redirect:false
            }
            return state;
        default:
            return state;
    }
}


export default myReducer;