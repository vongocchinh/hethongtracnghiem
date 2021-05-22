import * as types from "./../constanst/category";

import { db } from "./../config/fbConfig";


export const GET_CATEGORY_ALL = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_CATEGORY_ALL_LOADING());
    var data = [];
    var item;
    // var user=firebase.auth().currentUser;
    // if(user){
    //   localStorage.setItem('idUser',JSON.stringify(user));  
    //   dispatch(ID_USER(user.uid));
    // }
    db.collection("category")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          item = {
            id: doc.id,
            data: doc.data(),
          };
          data.push(item);
        });

        dispatch(GET_CATEGORY_ALL_SUCCESS(data));
      })
      .catch((err) => {
        dispatch(GET_CATEGORY_ALL_ERROR());
      });
  };
};



export const GET_CATEGORY_ALL_LOADING = () => {
  return {
    type: types.GET_CATEGORY_ALL_LOADING,
  };
};

export const GET_CATEGORY_ALL_ERROR = () => {
  return {
    type: types.GET_CATEGORY_ALL_ERROR,
  };
};

export const GET_CATEGORY_ALL_SUCCESS = (data) => {
  return {
    type: types.GET_CATEGORY_ALL_SUCCESS,
    payload: {
      data,
    },
  };
};

export const GET_CATEGORY_ALL_RESET=()=>{
  return {
    type:types.GET_CATEGORY_ALL_RESET
  }
}




export const GET_CATEGORY_DETAIL_SUCCESS = (data) => {
  return {
    type: types.GET_CATEGORY_DETAIL_SUCCESS,
    payload: {
      data,
    },
  };
};
export const GET_CATEGORY_DETAIL_SUCCESS_ERROR = () => {
  return {
    type: types.GET_CATEGORY_DETAIL_ERROR,
  };
};

export const GET_CATEGORY_DETAIL = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_CATEGORY_DETAIL_LOADING());
    db.collection("category")
      .doc(id)
      .get()
      .then((res) => {
        var data = {
          data:res.data(),
          id
        };
        dispatch(GET_CATEGORY_DETAIL_SUCCESS(data));
      })
      .catch((err) => {
        dispatch(GET_CATEGORY_DETAIL_SUCCESS_ERROR());
      });
  };
};

export const GET_CATEGORY_DETAIL_LOADING = () => {
  return {
    type: types.GET_CATEGORY_DETAIL_LOADING,
  };
};


export const GET_CATEGORY_DETAIL_RESET=()=>{
  return {
    type:types.GET_CATEGORY_DETAIL_RESET
  }
}