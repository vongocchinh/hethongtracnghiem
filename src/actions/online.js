import * as types from './../constanst/login';
import { db } from './../config/fbConfig';
export const GET_USER_ONLINE=()=>{
    
    return (dispatch, getState, { getFirebase }) => {
        dispatch(GET_USER_ONLINE_LOADING());
        db.collection('user').where('online','==',true).get().then(res=>{
            var data=[];
                    res.forEach(doc=>{
                        data.push(doc.data());
                    })
                    dispatch(GET_USER_ONLINE_SUCCESS(data));
                }).catch(er=>{
                    dispatch(GET_USER_ONLINE_ERROR());
                })
    }
}


export const GET_USER_ONLINE_SUCCESS=(data)=>{
    return {
        type:types.GET_USER_ONLINE_SUCCESS,
        data
    }
}


export const GET_USER_ONLINE_LOADING=()=>{
    return {
        type:types.GET_USER_ONLINE_LOADING,
        
    }
}

export const GET_USER_ONLINE_ERROR=()=>{
    return {
        type:types.GET_USER_ONLINE_ERROR,
        
    }
}

export const GET_USER_ONLINE_RESET=()=>{
    return {
        type:types.GET_USER_ONLINE_RESET,
        
    }
}