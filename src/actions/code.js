import * as types from "../constanst/code";
import * as types1 from "../constanst/login";
import * as typesQ from "../constanst/question";

import { db } from "./../config/fbConfig";
export const GET_CODE = ({ e, idCategory, iDUser }) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_QUESTION_LOADING());
    db.collection("category")
      .doc(idCategory)
      .get()
      .then((res) => {
        var codeCategory = res.data().code;
        if (res.data().rules) {
          if (codeCategory === e) {
            if (iDUser) {
              db.collection("user")
                .doc(iDUser)
                .get()
                .then((doc) => {
                  var idU = iDUser;
                  var idCategoryUser = doc.data().rules;
                  if (doc.data().quyen === 2) {
                    dispatch(GET_QUESTION_ERROR_RULES());
                  } else {
                    if (idCategoryUser !== idCategory) {
                      db.collection("user")
                        .doc(idU)
                        .set({
                          IDSV: doc.data().IDSV,
                          fullname: doc.data().fullname,
                          rules: idCategory,
                          uidAuthentication: doc.data().uidAuthentication,
                          itemR: doc.data().itemR,
                          itemW: doc.data().itemW,
                          count: doc.data().count,
                          online: doc.data().online,
                          categoryId: doc.data().categoryId,
                          quyen: doc.data().quyen,
                        })
                        .then((res) => {
                          dispatch(GET_QUESTION_SUCCESS());
                        })
                        .catch((er) => {});
                    } else {
                      dispatch(GET_QUESTION_SUCCESS_ERROR());
                    }
                  }
                });
            }
          } else {
            dispatch(GET_QUESTION_ERROR());
          }
        } else {
          dispatch(GET_QUESTION_ERROR_SERVER());
        }
        var data = {
          data: res.data(),
          idCategory,
        };
        dispatch(getCodeSuccess({ data, e }));
      })
      .catch((err) => {
        dispatch(GET_QUESTION_ERROR());
      });
  };
};

export const getCodeSuccess = (data) => {
  return {
    type: types.GET_CODE,
    payload: {
      data,
    },
  };
};

export const GET_QUESTION_ERROR_RULES = () => {
  return {
    type: types.GET_QUESTION_ERROR_RULES,
  };
};

export const GET_QUESTION_ERROR_SERVER = () => {
  return {
    type: typesQ.ERROR_SERVER,
  };
};

export const GET_QUESTION_LOADING = () => {
  return {
    type: typesQ.GET_QUESTION_LOADING,
  };
};

export const GET_QUESTION_ERROR = () => {
  return {
    type: typesQ.GET_QUESTION_ERROR,
  };
};
export const GET_QUESTION_SUCCESS = () => {
  return {
    type: typesQ.GET_QUESTION_SUCCESS,
  };
};

export const resetMessageGetQuestion = () => {
  return {
    type: typesQ.RESET_QUESTION_SUCCESS,
  };
};

export const GET_QUESTION_SUCCESS_ERROR = () => {
  return {
    type: typesQ.GET_QUESTION_SUCCESS_ERROR,
  };
};

export const GET_USER_RULES = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    db.collection("user")
      .doc(id)
      .get()
      .then((res) => {
        dispatch(GET_RULES(res.data()));
      })
      .catch((er) => {
        console.log(er);
      });
  };
};

export const GET_RULES = (data) => {
  return {
    type: types1.GET_RULES,
    data,
  };
};

export const GET_ID_USER = (id) => {
  return (dispatch, getState, { getFirebase }) => {
    var data = {};
    db.collection("user")
      .doc(id)
      .get()
      .then((doc) => {
        var id = doc.id;
        dispatch(GET_USER_ID_SUCCESS(id));
        data = doc.data();
        db.collection("user")
          .doc(id)
          .set({
            IDSV: data.IDSV,
            fullname: data.fullname,
            rules: data.rules,
            uidAuthentication: data.uidAuthentication,
            itemR: data.itemR,
            itemW: data.itemW,
            count: data.count,
            online: true,
            categoryId: data.categoryId,
            quyen: data.quyen,
          })
          .then((res) => {})
          .catch((er) => {});
      });
    console.log(data);
  };
};

export const GET_USER_ID_SUCCESS = (id) => {
  return {
    type: types.GET_USER_ID_SUCCESS,
    id,
  };
};

export const GET_USER_ID_ERROR = () => {
  return {
    type: types.GET_USER_ID_ERROR,
  };
};
