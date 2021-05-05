/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import HomeLeftComponent from "./../components/home/homeLeft";
import { connect } from "react-redux";
import * as action from "./../actions/category";
import * as action4 from "./../actions/code";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as action2 from "./../actions/redirect";
import * as action3 from "./../actions/message";
import * as action5 from "./../actions/question";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Redirect } from 'react-router-dom';

function HomeLeft(props) {
  var id = props.match.params.id;
  var { CategoryDetailStore, MessageStore, MessageQuestion, iDUserStore,QuestionStore} = props;

  if (MessageStore.ERROR_CODE) {
    toast.error("Ma code khong chinh xac");
  }
  const checkCode = (e) => {
    var data = { e, idCategory:id ,iDUser:iDUserStore};
    props.getCode(data);
  };
  useEffect(() => {
    props.GET_CATEGORY_DETAILS(id);
    props.GET_QUESTION_LENGTH(id);
  }, [id]);

  if(MessageQuestion.get_question_success){
    props.resetMessageGetQuestion();
    return <Redirect  to={"/thi/"+id} />
  }
  if(MessageQuestion.get_question_error){
    props.resetMessageGetQuestion();
  }
  if(MessageQuestion.get_question_success_error){
    setTimeout(() => {
      props.resetMessageGetQuestion();
    }, 2000);
    props.resetMessageGetQuestion();
    return <Redirect to={"/ketqua/"+id} />
  }
  return (
    <>
    <Dialog
        open={MessageQuestion.get_question_loading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <CircularProgress />
        </DialogActions>
      </Dialog>
      <HomeLeftComponent
        checkCode={checkCode}
        CategoryDetailStore={CategoryDetailStore && CategoryDetailStore}
        QuestionStore={QuestionStore&&QuestionStore}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    CategoryDetailStore: state.CategoryDetailStore,
    MessageStore: state.MessageStore,
    KetquaStore: state.KetquaStore,
    CodeStore: state.CodeStore,
    MessageQuestion:state.MessageQuestion,
    iDUserStore:state.iDUserStore,
    QuestionStore:state.QuestionStore
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_CATEGORY_DETAILS: (id) => {
      dispatch(action.GET_CATEGORY_DETAIL(id));
    },
    setThiTrue: (id) => {
      dispatch(action2.setRedirectThi(id));
    },
    GET_QUESTION_START: () => {
      dispatch(action3.GET_MESSAGE_QUESTION_START());
    },
    GET_ERROR_CODE: () => {
      dispatch(action3.GET_MESSAGE_ERROR_CODE());
    },
    RESET: () => {
      dispatch(action3.GET_MESSAGE_RESET());
    },
    getCode: (e) => {
      dispatch(action4.GET_CODE(e));
    },
    resetMessageGetQuestion:()=>{
      dispatch(action4.resetMessageGetQuestion());
    },
    GET_QUESTION_LENGTH:(id)=>{
      dispatch(action5.GET_QUESTION_ALL(id));
    }
  };
};
export default connect(mapStateToProps, dispatchToProps)(HomeLeft);
