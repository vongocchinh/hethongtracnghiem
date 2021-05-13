import React from "react";
import "./styles.scss";
import { Link,NavLink } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
export default function header(props) {
  const onClickLogout = () => {
    props.onClickLogout();
  };
  return (
    <>
      <div>
        <header className="header-basic">
          <div className="header-limiter">
            <h1>
              <Link to="/">
                CLB<span>Tin-Học</span>
              </Link>
            </h1>
            <nav>
              <NavLink exact={true} activeClassName='is-active' to="/caulacbo/khoahoc/hoc">
                Trang Chủ
              </NavLink >
              <NavLink  activeClassName='is-active' to="/introduce">
                Giới Thiệu
              </NavLink >
              <a className="aaa" href="###">{props.UsersAccountStore.fullname} |</a>
              <a href="###" onClick={onClickLogout}>
                Đăng Xuất&nbsp;
                <ExitToAppIcon className="ExitToAppIcon" />
              </a>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
