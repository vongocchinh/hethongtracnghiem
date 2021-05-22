/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import LoginComponent from "./../components/login/Login";
import { connect } from "react-redux";
import * as action from "./../actions/login";
import * as action2 from "./../actions/code";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from "react-router-dom";
import { toast } from 'react-toastify';
function Login(props) {
  var { LoginStore, LoginUserStore } = props;
  useEffect(() => {
    document.title="Đăng Nhập Vào Hệ Thống Thi ...";
    if (LoginUserStore) {
      props.GET_ID_USER(LoginUserStore);
    }
  }, [1])
  if (LoginUserStore) {
    return <Redirect to="/" />
  }
  console.log(LoginStore);
  if (LoginStore.login_success) {
    props.RESET();
    return <Redirect to="/" />
  }
  if (LoginStore.login_error) {
    toast.dark("Tài khoản của bạn chưa được cung cấp. Đăng nhập lại !!!")
  }
  const login = (e) => {
    props.LOGIN_USER(e);
  };
  return (
    <>
    <Dialog
        open={LoginStore.login_loading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <CircularProgress />
        </DialogActions>
      </Dialog>
      <LoginComponent login={login} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    LoginStore: state.LoginStore,
    LoginUserStore: state.LoginUserStore,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    LOGIN_USER: (e) => {
      dispatch(action.LOGIN_USER(e));
    },
    RESET: () => {
      dispatch(action.RESET());
    },
    GET_ID_USER:(id)=>{
      dispatch(action2.GET_ID_USER(id));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Login);
