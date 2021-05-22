import React from "react";
import "./styles.scss";
// import Grid from "@material-ui/core/Grid";

export default function course(props) {
  return (
    <>
      <div className="container">
        <div className="container-layout-home">
          <div >
            <p className="name-header-course">Giới Thiệu Các Khóa Học</p>
            <div  className="width-100" >
                {props.show}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
