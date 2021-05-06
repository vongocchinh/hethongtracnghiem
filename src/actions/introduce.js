import * as types from './../constanst/introduce';
import {db} from './../config/fbConfig';
export const GET_INTRODUCE=()=>{
    return (dispatch,getState,{getFirebase})=>{
        db.collection('userheader').get().then(res=>{
            var data=[];

            res.forEach(doc=>{
                data.push(doc.data());
            })
            dispatch(GET_INTRODUCE_SUCCESS(data));
        }).catch(er=>{

        })
    }
}

export const GET_INTRODUCE_SUCCESS=(data)=>{
    return {
        type:types.GET_INTRODUCE_SUCCESS,
        data
    }
}