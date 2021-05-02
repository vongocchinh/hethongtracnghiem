import * as types from '../constanst/redirect';


export const setRedirectThi=(id)=>{
    return {
        type:types.SET_REDIRECT_THI,
        id
    }
}

export const setRedirectThiReset=()=>{
    return {
        type:types.SET_REDIRECT_THI_RESET
    }
}