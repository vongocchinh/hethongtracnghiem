/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import HeaderComponent from "./../components/layout/header";
import { connect } from "react-redux";
import * as action from "./../actions/login";
import * as action2 from "./../actions/ketqua";
import * as action3 from "./../actions/code";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
function Header(props) {
  var { LoginUserStore, UsersAccountStore } = props;
  // console.log(LoginUserStore);
  useEffect(() => {
    if (LoginUserStore) {
      props.GET_USER(LoginUserStore);
      props.GET_ID_USER(LoginUserStore);
    }
  },[1]);
  if (!LoginUserStore) {
    return <Redirect to="/login" />;
  }
  
  const onClickLogout = () => {
    var idUser = LoginUserStore;
    props.onClickLogout(idUser);
  };
  return (
    <>
      <HeaderComponent
        UsersAccountStore={UsersAccountStore}
        onClickLogout={onClickLogout}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    LoginUserStore: state.LoginUserStore,
    UsersAccountStore: state.UsersAccountStore,
    iDUserStore: state.iDUserStore,
    LogouttStore:state.LogouttStore
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    onClickLogout: (idUser) => {
      dispatch(action.LOGOUT_USER(idUser));
    },
    GET_USER: (idUser) => {
      dispatch(action.USER_GET(idUser));
      dispatch(action2.GET_KET_QUA_USER(idUser));
    },
    GET_ID_USER:(id)=>{
      dispatch(action3.GET_ID_USER(id));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Header);
