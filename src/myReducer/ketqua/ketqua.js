

import * as types from './../../constanst/question';


var initialState={};
var myReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case types.GET_KET_QUA_SUCCESS:
            state=actions.data;
            return state;
        default:
            return state;
    }
}


export default myReducer;