/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import HeaderComponent from "./../components/layout/header";
import { connect } from "react-redux";
import * as action from "./../actions/login";
import * as action2 from "./../actions/ketqua";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
function Header(props) {
  var { LayoutStore, UsersAccountStore, iDUserStore } = props;
  useEffect(() => {
    props.GET_USER(iDUserStore);
  });
  if (!LayoutStore) {
    return <Redirect to="/login" />;
  }
  const onClickLogout = () => {
    var idUser = iDUserStore;
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
    LayoutStore: state.LayoutStore,
    UsersAccountStore: state.UsersAccountStore,
    iDUserStore: state.iDUserStore,
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
  };
};
export default connect(mapStateToProps, dispatchToProps)(Header);
