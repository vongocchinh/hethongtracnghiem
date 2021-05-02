

import * as types from './../../constanst/question';


var initialState=[];
var myReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case types.GET_QUESTION_ALL_SUCCESS:
            state=actions.payload.data;
            return state;
        default:
            return state;
    }
}


export default myReducer;