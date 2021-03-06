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
          db.collection("user")
            .where("uidAuthentication", "==", user.uid)
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
                    online: true,
                    categoryId: doc.data().categoryId,
                    quyen: doc.data().quyen,
                  })
                  .then((res) => {
                    localStorage.setItem("user", JSON.stringify(doc.id));
                    dispatch(LOGIN_SUCCESS(doc.id));
                  })
                  .catch((er) => {});
              });
            })
            .catch(function (error) {
              console.log("Error getting documents: ", error);
            });
        } else {
        }
        // dispatch(USER_GET());
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
      .doc(idUser)
      .get()
      .then((res) => {
        dispatch(USER_GET_SUCCESS(res.data()));
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



    firebase
    .auth()
    .signOut()
    .then(() => {

      db.collection("user")
      .doc(idUser)
      .get()
      .then((doc) => {
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
            categoryId: doc.data().categoryId,
            quyen: doc.data().quyen,
          })
          .then((res) => {
            var user = firebase.auth.currentUser;
            localStorage.removeItem("user");
            if (!user) {
              dispatch(LOGOUT_SUCCESS());
            }
            localStorage.removeItem("user");
            localStorage.clear();
          })
          .catch((er) => {});
      })
      .catch((err) => {});
    })
    .catch(() => {
      dispatch(LOGOUT_ERROR());
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
