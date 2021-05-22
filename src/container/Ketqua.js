/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ItemComponent from "../components/ketquaQuestion/Item";
import { connect } from "react-redux";
import * as action from "./../actions/question";
import * as action2 from "./../actions/ketqua";
import * as action3 from "./../actions/login";
import { Redirect } from "react-router-dom";
import { Dialog ,DialogActions ,CircularProgress} from '@material-ui/core';

function Ketqua(props) {
  var id = props.match.params.id;
  var { QuestionStore, UsersKetquaStore,LoginUserStore ,UsersAccountStore , MessageKetQuaStore} = props;
  useEffect(() => {
    document.title="Kết quả phần thi của sinh viên ...";
    props.getDataQuestion(id);
    props.GET_KET_QUA(LoginUserStore);
    props.GET_DATA_USER(LoginUserStore);
  }, [1]);
  if (!LoginUserStore) {
    return <Redirect to="/login" />;
  }
  const show = (data, QuestionStore) => {
    if (data && QuestionStore) {
      return (
        <>
          <td>{QuestionStore.length}</td>
          <td>{data.itemR}</td>
          <td>{data.itemW}</td>
          <td>{Math.round(((data.itemR/QuestionStore.length)*100) * 100) / 100} %</td>
          <td>{(Math.round(((data.itemR/QuestionStore.length)*100) * 100) / 100)/10}</td>
        </>
      );
    }
  };
  
  const onClickLogout=()=>{
    var idUser = LoginUserStore;
    props.onClickLogout(idUser);
  }
  if(MessageKetQuaStore.GET_RESULT_SUCCESS){
    props.RESET_MESSAGE_RESULT();
  }
  return (
    <>
     <Dialog
        open={props.LogouttStore.logout_loading||MessageKetQuaStore.GET_RESULT_SUCCESS}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <CircularProgress />
        </DialogActions>
      </Dialog>
      <ItemComponent
        QuestionStore={QuestionStore}
        show={show(UsersKetquaStore, QuestionStore)}
        onClickLogout={onClickLogout}
        UsersAccountStore={UsersAccountStore&&UsersAccountStore}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    KetquaStore: state.KetquaStore,
    QuestionStore: state.QuestionStore,
    LayoutStore: state.LayoutStore,
    UsersKetquaStore: state.UsersKetquaStore,
    UsersAccountStore:state.UsersAccountStore,
    LogouttStore:state.LogouttStore,
    LoginUserStore:state.LoginUserStore,
    MessageKetQuaStore:state.MessageKetQuaStore
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    getDataQuestion: (id) => {
      dispatch(action.GET_QUESTION_ALL(id));
    },
    GET_DATA_USER:(idUser)=>{
      dispatch(action2.GET_KET_QUA_USER(idUser));
    },
    GET_KET_QUA: (idUser) => {
      dispatch(action2.GET_KET_QUA_USER(idUser));
    },
    onClickLogout:(idUser)=>{
      dispatch(action3.LOGOUT_USER(idUser));
    },
    RESET_MESSAGE_RESULT:()=>{
      dispatch(action2.RESET_MESSAGE_RESULT());
    }
  };
};

export default connect(mapStateToProps, dispatchToProps)(Ketqua);
