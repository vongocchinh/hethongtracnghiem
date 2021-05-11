import React, { useState } from "react";
import "./styles.scss";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import ABc from "./../../asset/dd.svg";
import ABU from "./../../asset/aa.png";
export default function Login(props) {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.login({ username, password });
  };
  const onChange = (e) => {
    setName(e.target.value);
  };
  const onChange2 = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="bg-login">
      <div className="container">
        <div className="container-login-layout">
          <div className="container-login-main">
            <div className="container-login-main-left">
              <div className="container-login-main-left-img">
                <p>Câu Lạc Bộ Tin Học</p>
                <img alt="abc" src={ABc} />
                <a href="###">
                  Bạn Có Thể Đăng Nhập Với Tài Khoản Sau: MSV:sinhvienclb - Mật
                  Khẩu:sinhvienclb
                </a>
              </div>
            </div>
            <div className="container-login-main-right">
              <div className="img-logo-login">
                <img alt="abc" src={ABU} />
              </div>
              <p className="h-login">Welcome</p>
              <form onSubmit={onSubmit}>
                <div>
                  <div className="container-login-main-input">
                    <PersonIcon className="PersonIcon" />{" "}
                    <input
                      autoComplete="off"
                      required
                      minLength={10}
                      onChange={onChange}
                      name="names"
                      placeholder="Mã sinh viên"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <div className="container-login-main-input">
                    <LockIcon className="PersonIcon" />{" "}
                    <input
                      required
                      minLength={6}
                      autoComplete="off"
                      onChange={onChange2}
                      name="passwords"
                      placeholder="Mật khẩu"
                      type="password"
                    />
                  </div>
                </div>
                <div>
                  <input type="submit" value="Đăng Nhập" />
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
