import * as types from "./../constanst/question";
import { db } from "./../config/fbConfig";
export const GET_QUESTION_ALL = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_QUESTION_ALL_LOADING());
    var data = [];
    db.collection("question")
      .where("categoryId", "==", id)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        dispatch(GET_QUESTION_ALL_SUCCESS(data));
      })
      .catch((err) => {
        dispatch(GET_QUESTION_ALL_ERROR());
      });
  };
};

export const GET_QUESTION_ALL_LOADING = () => {
  return {
    type: types.GET_QUESTION_ALL_LOADING,
  };
};

export const GET_QUESTION_ALL_SUCCESS = (data) => {
  return {
    type: types.GET_QUESTION_ALL_SUCCESS,
    payload: {
      data,
    },
  };
};

export const GET_QUESTION_ALL_ERROR = () => {
  return {
    type: types.GET_QUESTION_ALL_ERROR,
  };
};

