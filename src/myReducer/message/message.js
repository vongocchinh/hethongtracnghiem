

import * as types from './../../constanst/message';


var initialState={
    ERROR_CODE:false,
    QUESTION_START:false
};
var myReducer=(state=initialState,actions)=>{
    switch (actions.type) {
        case types.QUESTION_START:
            state={
                ERROR_CODE:false,
                QUESTION_START:true
            };
            return state;
        case types.CODE_ERROR:
            state={
                ERROR_CODE:true,
                QUESTION_START:false
            }
            return state;
        case types.RESET_MESSAGE:
            state={
                ERROR_CODE:false,
                QUESTION_START:false
            }
            return state;
        default:
            return state;
    }
}


export default myReducer;