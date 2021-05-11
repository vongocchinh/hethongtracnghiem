import React from "react";
import "./styles.scss";
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
// import {Link} from 'react-router-dom';
import RouterCategory from "./../../router/routerCategory";
export default function Home(props) {
  return (
    <>
      <div className="container">
        <div className="container-layout-home">
          <div className="container-layout-main-home">
            <div className="container-h-title-home">
              <p>Chọn Khóa Học Lập Trình</p>
              {props.showCategory}
            </div>
            <div className="container-main-right-home">
              <RouterCategory />
            </div>
            <div className="container-main-right-home-user">
              <p className="header-online-user">user online</p>
              <div className="layout-container-main-user-online">
                {props.showOnline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
