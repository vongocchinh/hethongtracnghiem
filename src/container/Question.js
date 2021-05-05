/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ThiComponent from "../components/question/question";
import { connect } from "react-redux";
import * as action from "../actions/question";
import * as action2 from "../actions/category";
import * as action3 from "../actions/result";
import * as action4 from "../actions/ketqua";
import * as action5 from "../actions/login";
// import * as action4 from "../actions/ketqua";
import Item from "./../components/question/Item";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { Redirect } from "react-router-dom";

function Question(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageNew] = useState(10);
  const [times, setTimes] = useState(0)
  const [timess, setTimess] = useState(0)
  // const [idQ, setIDQ] = useState("")
  var id = props.match.params.id;
  var {
    CategoryDetailStore,
    QuestionStore,
    KetquaStore,
    iDUserStore,
    UsersAccountStore,
  } = props;

  useEffect(() => {
    GET_ALL_DATA();
    if(CategoryDetailStore.data){
      var count = (((CategoryDetailStore.data.time-1)*60));

    var counter = setInterval(timer, 1000);
    var count1=60;
   
    function timer() {
      count = count - 1;
      count1 = count1 - 1;
      var temp=count;
      setTimes((Math.ceil(temp/60)));
      
      if (count <= 0 && count1 === -1 ) {
        props.onClickResult({ id, idUSer: iDUserStore });
        clearInterval(counter);
        count=0;
        return;
      }
      setTimess(count1);
      if (count1 < 1 && count >= 0) {
        count1=60;
      }else if(count1 <= 0  && count >= 0){
        count1=-1;
        return ;
      }
    }
    }
  }, [1]);
  const GET_ALL_DATA = () => {
    props.GET_QUESTION_ALL(id);
    props.GET_CATEGORY_DETAIL(id);
    props.GET_KET_QUA_SUCCESS(iDUserStore);
    props.GET_USER(iDUserStore);
  };
  if (KetquaStore.redirectKetQua) {
    props.resetStoreKetQua();
    return <Redirect to={"/ketqua/" + id} />;
  }
  const showPagination = (data) => {
    if (data) {
      return (
        <Pagination
          page={currentPage}
          count={Math.ceil(data.length / currentPageNew)}
          size="small"
          onChange={onChangePagination}
          className="Pagination-item"
          color="primary"
        />
      );
    }
  };
  const onChangePagination = (e, value) => {
    setCurrentPage(value);
  };
  const clickItem = (value) => {
    if (value >= 60 && value <= 70) {
      setCurrentPage(7);
    }
    if (value >= 50 && value <= 60) {
      setCurrentPage(6);
    }
    if (value >= 40 && value <= 50) {
      setCurrentPage(5);
    }
    if (value >= 30 && value <= 40) {
      setCurrentPage(4);
    }
    if (value >= 20 && value <= 30) {
      setCurrentPage(3);
    }
    if (value >= 11 && value <= 20) {
      setCurrentPage(2);
    }
    if (value >= 1 && value <= 10) {
      setCurrentPage(1);
    }
  };
  const showQuestion = (data) => {
    var result = null;
    var pageLast=currentPage*currentPageNew;
    var pageFirst=pageLast- currentPageNew;
    // data=data.slice(pageFirst,pageLast);
    var ch=pageFirst;
    ch--;
    result =
      data &&
      data.map((value, key) => {
        ch++;
        return (
          <Item key={key} onChange={onChangeResult} ch={ch} stt={key} value={value} />
        );
      });
    return result;
  };
  const showMap = (data) => {
    var result = null;
    result =
      data &&
      data.map((value, key) => {
        return (
          <Grid className="container-grid-layout-main" key={key} item>
            <Paper className="material-list-number">
              <a onClick={() => clickItem(key)} href={"#" + value.id}>
                {key + 1}
              </a>
            </Paper>
          </Grid>
        );
      });
    return result;
  };
  const onChangeResult = (e) => {
    props.ADD_ARRAY_RESULT(e);
  };

  const onClickResult = () => {
    props.onClickResult({ id, idUSer: iDUserStore });
  };
  return (
    <>
      <ThiComponent
        showPagination={showPagination(QuestionStore)}
        showMap={showMap(QuestionStore)}
        showQuestion={showQuestion(QuestionStore)}
        CategoryDetailStore={CategoryDetailStore}
        onClickResult={onClickResult}
        UsersAccountStore={UsersAccountStore}
        times={times}
        timess={timess}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    QuestionStore: state.QuestionStore,
    CategoryDetailStore: state.CategoryDetailStore,
    MessageStore: state.MessageStore,
    KetquaStore: state.KetquaStore,
    iDUserStore: state.iDUserStore,
    UsersAccountStore: state.UsersAccountStore,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_QUESTION_ALL: (id) => {
      dispatch(action.GET_QUESTION_ALL(id));
    },
    GET_KET_QUA_SUCCESS: () => {
      // dispatch(action4.GET_KET_QUA_SUCCESS());
    },
    GET_CATEGORY_DETAIL: (id) => {
      dispatch(action2.GET_CATEGORY_DETAIL(id));
    },
    ADD_ARRAY_RESULT: (e) => {
      dispatch(action3.ADD_RESULT(e));
    },
    onClickResult: ({ id, idUSer }) => {
      dispatch(action3.onClickResult({ id, idUSer }));
    },
    resetStoreKetQua: () => {
      dispatch(action4.resetStoreKetQua());
    },
    GET_USER: (idUser) => {
      dispatch(action5.USER_GET(idUser));
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(Question);
