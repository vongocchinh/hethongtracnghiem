import * as types from "./../constanst/login";
// import * as types2 from "../constanst/user";
import { db } from "../config/fbConfig";
import firebase from "./../config/fbConfig";
export const LOGIN_USER = (e) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(LOGIN_REQUEST());
    var emailUSer = e.username + "@ued.udn.vn";
    firebase
      .auth()
      .signInWithEmailAndPassword(emailUSer, e.password)
      .then((res) => {
        var user = firebase.auth().currentUser;
        if (user) {
          dispatch(ID_USER(user.uid));
          db.collection("user")
            .where("uidAuthentication", "==", user.uid)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach(function (doc) {
                var userArray = {
                  idUser: doc.id,
                };
                db.collection("user")
                  .doc(doc.id)
                  .set({
                    IDSV: doc.data().IDSV,
                    fullname: doc.data().fullname,
                    rules: doc.data().rules,
                    uidAuthentication: doc.data().uidAuthentication,
                    itemR: doc.data().itemR,
                    itemW: doc.data().itemW,
                    count: doc.data().count,
                    online: true,
                  })
                  .then((res) => {})
                  .catch((er) => {});
                localStorage.setItem("apiuid", JSON.stringify(userArray));
                dispatch(LOGIN_SUCCESS(userArray));
              });
            })
            .catch(function (error) {
              console.log("Error getting documents: ", error);
            });
        } else {
        }
        dispatch(USER_GET());
      })
      .catch((error) => {
        dispatch(LOGIN_FAILURE());
        // console.log(error);
      });
  };
};

export const ID_USER = (id) => {
  return {
    type: types.idUser,
    id,
  };
};

export const LOGIN_REQUEST = () => {
  return {
    type: types.LOGIN_USER_LOADING,
  };
};

export const USER_GET = (idUser) => {
  return (dispatch, getState, { getFirebase }) => {
    db.collection("user")
      .where("uidAuthentication", "==", idUser)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          dispatch(USER_GET_SUCCESS(doc.data()));
        });
      });
  };
};

export const USER_GET_SUCCESS = (data) => {
  return {
    type: types.GET_USER,
    data,
  };
};

export const LOGIN_SUCCESS = (id) => {
  return {
    type: types.LOGIN_USER_SUCCESS,
    id,
  };
};

export const LOGIN_FAILURE = () => {
  return {
    type: types.LOGIN_USER_ERROR,
  };
};

export const LOGOUT_USER = (idUser) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(LOGOUT_REQUEST());

    db.collection("user")
      .where("uidAuthentication", "==", idUser)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(function (doc) {
          db.collection("user")
            .doc(doc.id)
            .set({
              IDSV: doc.data().IDSV,
              fullname: doc.data().fullname,
              rules: doc.data().rules,
              uidAuthentication: doc.data().uidAuthentication,
              itemR: doc.data().itemR,
              itemW: doc.data().itemW,
              count: doc.data().count,
              online: false,
            })
            .then((res) => {})
            .catch((er) => {});
        });
        firebase
      .auth()
      .signOut()
      .then(() => {
        var user = firebase.auth.currentUser;
        localStorage.removeItem("apiuid");
        if (!user) {
          dispatch(LOGOUT_SUCCESS());
        }
        localStorage.removeItem("apiuid");
        localStorage.clear();
        dispatch(USER_GET());
      })
      .catch(() => {
        dispatch(LOGOUT_ERROR());
      });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    
  };
};

export const LOGOUT_REQUEST = () => {
  return {
    type: types.LOGOUT_USER_LOADING,
  };
};

export const LOGOUT_SUCCESS = () => {
  return {
    type: types.LOGOUT_USER_SUCCESS,
  };
};

// export const USER_GET=()=>{
//     return {
//         type:types.GET_USER
//     }
// }

export const LOGOUT_ERROR = () => {
  return {
    type: types.LOGOUT_USER_ERROR,
  };
};

export const RESET = () => {
  return {
    type: types.RESET_MESSAGE_USER,
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
  console.log(data);
  return {
    type: types.GET_RULES,
    data,
  };
};
