import React from "react";

export default function Item(props) {
  var { value, stt } = props;
  const onChange = (e) => {
    var result = {
      id: value.id,
      da: e.target.value,
    };

    props.onChange(result);
  };
  const showItem = (value,stt) => {
    var result = null;
    // value=fisherYates(value);
    if (value) {
      return (
        <div className="container-main-right-home-layout-math-ch">
          <div className="container-main-right-home-layout-math-ch-item">
            <input
              onChange={onChange}
              id="1"
              name={"da" + (stt + 1)}
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
              id="1"
              name={"da" + (stt + 1)}
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
              id="1"
              name={"da" + (stt + 1)}
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
              id="1"
              name={"da" + (stt + 1)}
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
  return (
    <>
      <div id={value.id} className="container-main-right-home-layout-math-sb">
        <div>
          <p>
            Câu {stt + 1}: {value.data.name}.
          </p>
          {showItem(data,stt)}
        </div>
      </div>
    </>
  );
}
