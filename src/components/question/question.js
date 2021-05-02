import React,{} from "react";
import Grid from "@material-ui/core/Grid";
// import {Link} from 'react-router-dom';
import "./style.scss";

import Countdown from "react-countdown";
export default function Thi(props) {
  
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const complete = () => <span>Hết thời gian làm bài !</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <complete />;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };
  const times=(ts)=>{
    var times=(ts*1000)*60;
    return Date.now() + times;
  }
  const onClickResult=()=>{
    props.onClickResult();
  }
  return (
    <>
      <div className="container">
        <div className="container-layout-home">
          <form onSubmit={onSubmit} className="container-layout-main-home">
            <div className="container-title-home">
              <div className="container-title-home-1">
                <p>Võ Ngọc Chính</p>
                <p>3120218017</p>
              </div>
              <div className="time">
                <p>
                  {props.CategoryDetailStore.data? (
                    <Countdown
                    date={times(props.CategoryDetailStore.data.time)}
                    renderer={renderer}
                  />
                  ):(<></>)}
                </p>
                <button onClick={onClickResult} value="Nôp Bài" type="submit" >Nôp Bài</button>
              </div>
              <div>
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
