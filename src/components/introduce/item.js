import React from "react";

export default function item(props) {
  var { value } = props;
  return (
    <>
      <div className="paper-introduce-lab">
        <div className="img-introduce-layout">
          <img alt="abc" src={value.img} />
        </div>
        <div className="introduce-detail">
          <p>{value.rules}</p>
          <p>Họ tên: {value.name}</p>
          <p>
            FaceBook :{" "}
            <a rel="noreferrer" href={value.fb} target="_blank">
              {value.fb}
            </a>
          </p>
          <p>Số điện thoại : {value.phone} </p>
          <p>
            Đứng lớp : {value.des}
          </p>
        </div>
      </div>
    </>
  );
}
