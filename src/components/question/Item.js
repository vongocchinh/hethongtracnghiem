import React from "react";

export default function Item(props) {
  var { value } = props;
  const onChange = (e) => {
    var result = {
      id: value.id,
      da: e.target.value,
    };

    props.onChange(result);
  };
  const showItem = (value, stt) => {
    var result = null;
    console.log(stt);
    // value=fisherYates(value);
    if (value) {
      return (
        <div className="container-main-right-home-layout-math-ch">
          <div className="container-main-right-home-layout-math-ch-item">
            <input
              onChange={onChange}
              id={stt}
              name={"da" + stt}
              type="radio"
              value={value[0]}
            />{" "}
            <span>
              <strong>A.</strong>
              {value[0]}.
            </span>
          </div>
          <div className="container-main-right-home-layout-math-ch-item">
            <input
              onChange={onChange}
              id={stt}
              name={"da" + stt}
              type="radio"
              value={value[1]}
            />{" "}
            <span>
              <strong>B.</strong> {value[1]}.
            </span>
          </div>
          <div className="container-main-right-home-layout-math-ch-item">
            <input
              onChange={onChange}
              id={stt}
              name={"da" + stt}
              type="radio"
              value={value[2]}
            />{" "}
            <span>
              <strong>C.</strong> {value[2]}.
            </span>
          </div>
          <div className="container-main-right-home-layout-math-ch-item">
            <input
              onChange={onChange}
              id={stt}
              name={"da" + stt}
              type="radio"
              value={value[3]}
            />{" "}
            <span>
              <strong>D.</strong> {value[3]}.
            </span>
          </div>
        </div>
      );
    }
    return result;
  };
  // const fisherYates = (array) => {
  //   var count = array.length,
  //     randomnumber,
  //     temp;
  //   while (count) {
  //     randomnumber = (Math.random() * count--) | 0;
  //     temp = array[count];
  //     array[count] = array[randomnumber];
  //     array[randomnumber] = temp;
  //   }
  //   return array;
  // };
  var data = [];
  data.push(value.data.a);
  data.push(value.data.c);
  data.push(value.data.d);
  data.push(value.data.b);

  const showCH = (data) => {
    var result = null;

    if (data) {
      if (data.data.rules) {
        return <>{value.data.name}</>;
      } else {
        return (
          <>
            Cho câu hỏi như hình:
            <br />
            <div className="layout-img-question">
              <img
                alt={data.data.name}
                src={
                  data.data.name
                }
                className="img-question"
              />
            </div>
          </>
        );
      }
    }
    return result;
  };
  return (
    <>
      <div id={value.id} className="container-main-right-home-layout-math-sb">
        <div>
          <p>
            Câu {props.ch + 1}:{showCH(props.value)}
          </p>
          {showItem(data, props.ch)}
        </div>
      </div>
    </>
  );
}
