import React from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";

export default function course(props) {
  return (
    <>
      <div className="container">
        <div className="container-layout-home">
          <Grid container spacing={2}>
            <p className="name-header-course">Giới Thiệu Các Khóa Học</p>
            <Grid item className="width-100" >
              <Grid container justify="center" spacing={5}>
                {props.show}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
