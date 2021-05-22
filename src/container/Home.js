/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import HomeComponent from "./../components/home/Home";
import * as actionQuestion from "./../actions/category";
import * as actionQ2 from "./../actions/redirect";
import * as action3 from "./../actions/code";
import CategoryItem from "./../components/home/category/category";
import { Redirect } from "react-router-dom";
// import { useEffect } from 'react';
// import LinearProgress from '@material-ui/core/LinearProgress';
import OnlineComponent from "./../components/home/online/online";
import * as action5 from "./../actions/online";
import { Dialog, DialogActions, CircularProgress } from "@material-ui/core";
function Home(props) {
  var { CategoryStore, LoginUserStore, OnlineStore ,MessageOnlineStore,MessageCategoryStore} = props;
  useEffect(() => {
    document.title = "Trang chủ hệ thống thi trắc nghiệm ...";
    props.GET_CATEGORY();
    props.GET_USER_ONLINE();
    if (LoginUserStore) {
      props.GET_ID_USER(LoginUserStore);
    }
  }, [1]);
  if (!LoginUserStore) {
    return <Redirect to="/login" />
  }
  if(MessageOnlineStore.GET_USER_ONLINE_SUCCESS){
    props.GET_USER_ONLINE_RESET();
  }
  if(MessageCategoryStore.GET_CATEGORY_ALL_SUCCESS){
    props.GET_CATEGORY_ALL_RESET();
  }
  const showCategory = (data) => {
    var result = null;
    if (data) {
      result =
        data &&
        data.map((value, index) => {
          if (value.data.rules) {
            return <CategoryItem key={index} value={value} />;
          }
        });
    }

    return result;
  };

  const showOnline = (data) => {
    var result = null;
    if (data) {
      result =
        data &&
        data.map((value, key) => {
          return <OnlineComponent value={value} key={key} />;
        });
    }
    return result;
  };
  return (
    <>
    
      <Dialog
        open={props.LogouttStore.logout_loading||MessageOnlineStore.GET_USER_ONLINE_LOADING||MessageCategoryStore.GET_CATEGORY_ALL_LOADING}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <CircularProgress />
        </DialogActions>
      </Dialog>
      <HomeComponent
        showCategory={showCategory(CategoryStore)}
        showOnline={showOnline(OnlineStore && OnlineStore)}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    CategoryStore: state.CategoryStore,
    RedirectStore: state.RedirectStore,
    LoginUserStore: state.LoginUserStore,
    LoginStore: state.LoginStore,
    OnlineStore: state.OnlineStore,
    LogouttStore: state.LogouttStore,
    MessageOnlineStore:state.MessageOnlineStore,
    MessageCategoryStore:state.MessageCategoryStore,
  };
};

const dispatchToProps = (dispatch, props) => {
  return {
    GET_CATEGORY: () => {
      dispatch(actionQuestion.GET_CATEGORY_ALL());
    },
    GET_CATEGORY_ALL_RESET:()=>{
      dispatch(actionQuestion.GET_CATEGORY_ALL_RESET());
    },
    setRedirectReset: () => {
      dispatch(actionQ2.setRedirectThiReset());
    },
    getRulesUser: (id) => {
      // dispatch(action3.GET_USER_RULES(id));
    },
    GET_USER_ONLINE: () => {
      dispatch(action5.GET_USER_ONLINE());
    },
    GET_ID_USER:(id)=>{
      dispatch(action3.GET_ID_USER(id));
    },
    GET_USER_ONLINE_RESET:()=>{
      dispatch(action5.GET_USER_ONLINE_RESET());
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(Home);
