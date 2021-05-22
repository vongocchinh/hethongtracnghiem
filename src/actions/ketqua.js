
import {db} from '../config/fbConfig';
// import firebase from './../config/fbConfig';
import * as types from '../constanst/question';
import * as types1 from '../constanst/result';


export const GET_KET_QUA_USER = (idUser) => {
    return (dispatch, getState, { getFirebase }) => {

      dispatch(GET_MESSAGE_LOADING());
      if (idUser) {
        db.collection("user").doc(idUser)
          .get()
          .then((doc) => {
            dispatch(GET_KET_QUA_SUCCESS(doc.data()));
          }).catch(err=>{
            dispatch(GET_KET_QUA_ERROR())
          });
      }else{
        dispatch(GET_KET_QUA_ERROR())
      }
    };
  };
  export const GET_KET_QUA_SUCCESS=(data)=>{
      return {
          type:types.GET_KET_QUA_SUCCESS,
          data
      }
  }


  export const GET_KET_QUA_ERROR=()=>{
    return {
      type:types.GET_KET_QUA_ERROR
    }
  }

  export const resetStoreKetQua=()=>{
    return {
      type:types1.RESET_KQ
    }
  }


  export const RESET_MESSAGE_RESULT=()=>{
    return {
      type:types.GET_KET_QUA_RESET
    }
  }


  export const GET_MESSAGE_LOADING=()=>{
    return {
      type:types.GET_KET_QUA_LOADING
    }
  }