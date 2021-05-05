import React from "react";
import Grid from "@material-ui/core/Grid";
// import {Link} from 'react-router-dom';
import "./style.scss";
import SchoolIcon from '@material-ui/icons/School';
export default function Thi(props) {
  console.log(props.CategoryDetailStore);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onClickResult = () => {
    props.onClickResult();
  };
  const show = (data) => {
    if (data) {
      return (
        <>
          <p>Họ-Tên: {data.fullname}</p>
          <p>MaSV: {data.IDSV}</p>
        </>
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="container-layout-home">
          <form onSubmit={onSubmit} className="container-layout-main-home">
            <div className="container-title-home">
              <div className="container-title-home-1">
                {show(props.UsersAccountStore)}
              </div>
              <div className="time">
                <p>
                  {props.times}
                  :{props.timess} s
                </p>
                <button onClick={onClickResult} value="Nôp Bài" type="submit">
                  Nôp Bài
                </button>
              </div>
              <div>
                <p className="header-name-1">Mục Lục Câu Hỏi</p>
                <Grid className="container-grid" item xs={12}>
                  <Grid
                    container
                    className="container-grid-layout"
                    justify="center"
                    spacing={2}
                  >
                    {props.showMap}
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="container-main-right-home">
              <div className="container-main-right-home-layout">
                <p className="header-name"><SchoolIcon />&nbsp;{props.CategoryDetailStore.data?props.CategoryDetailStore.data.name:""}</p>
                <p className="p">
                  Đề thi (Lưu ý hoành thành bài thi trước giờ quy định)
                </p>
                <div className="container-main-right-home-layout-math">
                  {props.showQuestion}
                </div>
                <div className="Pagination">{props.showPagination}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
