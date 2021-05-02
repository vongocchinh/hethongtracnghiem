

import * as types from './../../constanst/category';


var initialState={};
var myReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case types.GET_CATEGORY_DETAIL_SUCCESS:
            state=actions.payload.data;
            return state;
        default:
            return state;
    }
}


export default myReducer;