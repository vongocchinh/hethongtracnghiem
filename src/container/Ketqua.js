/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ItemComponent from "../components/ketquaQuestion/Item";
import { connect } from "react-redux";
import * as action from "./../actions/question";
import * as action2 from "./../actions/ketqua";
import * as action3 from "./../actions/login";
import { Redirect } from "react-router-dom";
function Ketqua(props) {
  var id = props.match.params.id;
  var { QuestionStore, LayoutStore, UsersKetquaStore,iDUserStore } = props;
  useEffect(() => {
    props.getDataQuestion(id);
    props.GET_KET_QUA(iDUserStore);
    props.GET_DATA_USER(iDUserStore);
  }, [1]);
  if (!LayoutStore) {
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
          <td>{data.count}</td>
        </>
      );
    }
  };
  
  const onClickLogout=()=>{
    var idUser = iDUserStore;
    props.onClickLogout(idUser);
  }
  return (
    <>
      <ItemComponent
        QuestionStore={QuestionStore}
        show={show(UsersKetquaStore, QuestionStore)}
        onClickLogout={onClickLogout}
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
    iDUserStore:state.iDUserStore
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
    }
  };
};

export default connect(mapStateToProps, dispatchToProps)(Ketqua);
