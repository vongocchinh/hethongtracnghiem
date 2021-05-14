import * as course from "./../constanst/message";
import { db } from "./../config/fbConfig";
export const GET_COURSE = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(GET_COURSE_LOADING());
    db.collection("course")
      .get()
      .then((res) => {
        var data = [];
        res.forEach((doc) => {
          data.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        dispatch(GET_COURSE_SUCCESS(data));
      })
      .catch((er) => {});
  };
};
export const GET_COURSE_SUCCESS = (data) => {
  return {
    type: course.GET_COURSE_SUCCESS,
    data,
  };
};

export const GET_COURSE_LOADING = () => {
  return {
    type: course.GET_COURSE_LOADING,
  };
};



export const GET_COURSE_ERROR=()=>{
  return {
    type:course.GET_COURSE_ERROR
  }
}