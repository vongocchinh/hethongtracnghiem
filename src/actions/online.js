import * as types from './../constanst/Online';
import { db } from './../config/fbConfig';
export const GET_USER_ONLINE=()=>{
    return (dispatch, getState, { getFirebase }) => {
        db.collection('user').where('online','==',true).get().then(res=>{
            var data=[];
                    res.forEach(doc=>{
                        data.push(doc.data());
                    })
                    dispatch(GET_USER_ONLINE_SUCCESS(data));
                })
    }
}


export const GET_USER_ONLINE_SUCCESS=(data)=>{
    return {
        type:types.GET_USER_ONLINE_SUCCESS,
        data
    }
}