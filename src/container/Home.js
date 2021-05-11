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
import OnlineComponent from "./../components/home/online/online";
import * as action5 from "./../actions/online";
import { Dialog, DialogActions, CircularProgress } from "@material-ui/core";
function Home(props) {
  var { CategoryStore, LayoutStore, OnlineStore } = props;
  useEffect(() => {
    document.title = "Trang chủ hệ thống thi trắc nghiệm ...";
    props.GET_CATEGORY();
    props.GET_USER_ONLINE();
    if (LayoutStore) {
      props.getRulesUser(LayoutStore.idUser);
    }
  }, [1]);
  if (!LayoutStore) {
    return <Redirect to="/login" />;
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
        open={props.LogouttStore.logout_loading}
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
    LayoutStore: state.LayoutStore,
    UsersStore: state.UsersStore,
    LoginStore: state.LoginStore,
    OnlineStore: state.OnlineStore,
    LogouttStore: state.LogouttStore,
  };
};

const dispatchToProps = (dispatch, props) => {
  return {
    GET_CATEGORY: () => {
      dispatch(actionQuestion.GET_CATEGORY_ALL());
    },
    setRedirectReset: () => {
      dispatch(actionQ2.setRedirectThiReset());
    },
    getRulesUser: (id) => {
      dispatch(action3.GET_USER_RULES(id));
    },
    GET_USER_ONLINE: () => {
      dispatch(action5.GET_USER_ONLINE());
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(Home);
