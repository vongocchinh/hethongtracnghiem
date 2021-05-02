import React from "react";
// import { Link } from 'react-router-dom';
import "./styles.scss";
export default function HomDetailDefault(props) {
  var { UsersAccountStore } = props;
  const show = (data) => {
    if (data) {
      return (
        <>
          <p>Xin chào : {data.fullname}</p>
          <p>Mã Sinh Viên : {data.IDSV}</p>
          <p>Chọn khóa học tương ứng để tham gia thi</p>
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
