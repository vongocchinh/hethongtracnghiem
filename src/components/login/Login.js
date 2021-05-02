import React, { useState } from "react";
import "./styles.scss";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
export default function Login(props) {

  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit=(e)=>{
    e.preventDefault();
    e.target.reset();
    props.login({username,password});
  }
  const onChange=(e)=>{
    setName(e.target.value);
  }
  const onChange2=(e)=>{
    setPassword(e.target.value);
  }
  return (
    <>
      <div className="container">
        <div className="container-login-layout">
          <div className="container-login-main">
            <p className="h-login">Hệ Thống Đăng Nhập</p>
            <form onSubmit={onSubmit}>
              <div>
                <div className="container-login-main-input">
                  <PersonIcon className="PersonIcon" /> <input onChange={onChange} name="names" placeholder="Mã sinh viên" type="text" />
                </div>
              </div>
              <div>
                <div className="container-login-main-input">
                  <LockIcon className="PersonIcon" /> <input onChange={onChange2} name="passwords" placeholder="Mật khẩu" type="password" />
                </div>
              </div>
              <div>
                <input type="submit" value="Đăng Nhập" />
              </div>
              <div>
                <a href="###">Câu lạc bộ tin học</a>
                <a href="####">Website liên hệ mr.chinh</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
