import React from "react";
import { Link } from 'react-router-dom';

export default function Category(props) {
  var {value}=props;
  return (
    <>
      <div className="container-left-menu-list">
        <Link to={"/category/"+value.id} className="menu-list" href="###">
            {value.data.name}
        </Link>
      </div>
    </>
  );
}
