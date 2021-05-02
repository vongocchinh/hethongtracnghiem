
import {db} from '../config/fbConfig';
// import firebase from './../config/fbConfig';
import * as types from '../constanst/question';
import * as types1 from '../constanst/result';


export const GET_KET_QUA_USER = () => {
    return (dispatch, getState, { getFirebase }) => {
      var user = JSON.parse(localStorage.getItem('id'));
      if (user) {
        db.collection("user")
          .where("uidAuthentication", "==", user)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
              dispatch(GET_KET_QUA_SUCCESS(doc.data()));
            });
          });
      }
    };
  };
  
  
  export const GET_KET_QUA_SUCCESS=(data)=>{
      return {
          type:types.GET_KET_QUA_SUCCESS,
          data
      }
  }


  export const resetStoreKetQua=()=>{
    return {
      type:types1.RESET_KQ
    }
  }