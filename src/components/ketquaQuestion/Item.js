import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
export default function Item(props) {
  const onClickLogout = () => {
    props.onClickLogout();
  };

  return (
    <>
      <div className="container">
        <div className="name-result-kq">Kết Quả Thi Của Sinh Viên</div>
        <div className="name-result-kq-p">({props.UsersAccountStore?props.UsersAccountStore.fullname:""}-{props.UsersAccountStore?props.UsersAccountStore.IDSV:""} )</div>
        <div className="container-result">
          <table>
            <thead>
              <tr>
                <th>Số câu</th>
                <th>Số câu đúng</th>
                <th>Số câu sai</th>
                <th>Phần Trăm</th>
                <th>Điểm</th>
              </tr>
            </thead>
            <tbody>
              <tr>{props.show}</tr>
            </tbody>
          </table>
          <div className="option-kq">
            <Link className="option-kq-btn" to="/">
              Trang Chủ
            </Link>
            <p onClick={onClickLogout} className="option-kq-btn">
              Đăng Xuất
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
