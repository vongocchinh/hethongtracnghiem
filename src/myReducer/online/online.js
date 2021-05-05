

import * as types from './../../constanst/Online';


var initialState=[];
var myReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case types.GET_USER_ONLINE_SUCCESS:
            state=actions.data;
            return state;
        default:
            return state;
    }
}


export default myReducer;