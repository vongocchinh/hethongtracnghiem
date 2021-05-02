import React from "react";
import "./style.scss";
export default function Item(props) {

  return (
    <>
      <div className="container">
        <div className="container-result">
          <table>
            <thead>
              <tr>
                <th>Số câu</th>
                <th>Số câu đúng</th>
                <th>Số câu sai</th>
                <th>Điểm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {props.show}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
