import React from "react";
import "./styles.scss";
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default function header(props) {
  const onClickLogout=()=>{
    props.onClickLogout();
  }
  return (
    <>
<div>
        <header className="header-basic">
          <div className="header-limiter">
            <h1><Link to="/">CLB<span>Tin-Hoc</span></Link></h1>
            <nav>
              <a href="###">User: {props.UsersAccountStore.fullname} |</a>
              <a href="###" onClick={onClickLogout} >Đăng Xuất&nbsp;<ExitToAppIcon className="ExitToAppIcon" /></a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
