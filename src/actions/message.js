import * as types from '../constanst/message';


export const GET_MESSAGE_ERROR_CODE=()=>{
    return {
        type:types.CODE_ERROR
    }
}


export const GET_MESSAGE_QUESTION_START=()=>{
    return {
        type:types.QUESTION_START
    }
}

export const GET_MESSAGE_RESET=()=>{
    return {
        type:types.RESET_MESSAGE
    }
}