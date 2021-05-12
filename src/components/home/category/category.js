import React from "react";
import { NavLink } from 'react-router-dom';

export default function Category(props) {
  var {value}=props;
  return (
    <>
      <div className="container-left-menu-list">
        <NavLink exact={true} to={"/category/"+value.id} className="menu-list" href="###">
            {value.data.name}
        </NavLink>
      </div>
    </>
  );
}
