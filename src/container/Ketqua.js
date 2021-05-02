/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import ItemComponent from "../components/ketquaQuestion/Item";
import { connect } from "react-redux";
import * as action from "./../actions/question";
import * as action2 from "./../actions/ketqua";
import { Redirect } from "react-router-dom";
function Ketqua(props) {
  var id = props.match.params.id;
  var { QuestionStore, LayoutStore, UsersKetquaStore } = props;
  useEffect(() => {
    props.getDataQuestion(id);
    props.GET_KET_QUA();
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
          <td>{data.count}</td>
        </>
      );
    }
  };
  return (
    <>
      <ItemComponent
        QuestionStore={QuestionStore}
        show={show(UsersKetquaStore, QuestionStore)}
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
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    getDataQuestion: (id) => {
      dispatch(action.GET_QUESTION_ALL(id));
      dispatch(action2.GET_KET_QUA_USER());
    },
    GET_KET_QUA: () => {
      dispatch(action2.GET_KET_QUA_USER());
    },
  };
};

export default connect(mapStateToProps, dispatchToProps)(Ketqua);
