/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import CourseComponent from "./../components/course/course";
import { useEffect } from "react";
import * as action from "./../actions/course";
import { Dialog } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import Item from "./../components/course/Item";

function Course(props) {
  useEffect(() => {
    props.GET_COURSE();
  }, [1]);
  var { CourseStore, CourseMessageStore } = props;
  const show = (data) => {
    var result = null;
    if (data) {
      result = data.map((value, key) => {
        return <Item value={value} key={key} />;
      });
    }
    return result;
  };
  return (
    <>
      <Dialog
        open={CourseMessageStore.get_course_loading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogActions>
          <CircularProgress />
        </DialogActions>
      </Dialog>
      <CourseComponent show={show(CourseStore)} />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    CourseStore: state.CourseStore,
    CourseMessageStore: state.CourseMessageStore,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    GET_COURSE: () => {
      dispatch(action.GET_COURSE());
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(Course);
