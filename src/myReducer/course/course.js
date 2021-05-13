

import * as types from './../../constanst/message';


var initialState=[];
var myReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case types.GET_COURSE_SUCCESS:
            state=actions.data;
            return state;
        default:
            return state;
    }
}


export default myReducer;