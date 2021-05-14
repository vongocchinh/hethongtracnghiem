import React from "react";
// import { Link } from 'react-router-dom';
import "./styles.scss";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
export default function HomDetailDefault(props) {
  var { UsersAccountStore } = props;
  const show = (data) => {
    if (data) {
      return (
        <>
          <p><CheckCircleIcon className="CheckCircleIcon"  color="primary" fontSize="small" /> Xin chào : <span>{data.fullname}</span></p>
          <p><CheckCircleIcon className="CheckCircleIcon" color="primary" fontSize="small" /> Mã Sinh Viên : <span>{data.IDSV}</span></p>
          <p><CheckCircleIcon className="CheckCircleIcon" color="primary" fontSize="small" /> Chọn khóa học tương ứng để tham gia thi</p>
        </>
      );
    }
  };
  return (
    <>
      <div className="container-main-right-layout">
        {show(UsersAccountStore)}
      </div>
    </>
  );
}
