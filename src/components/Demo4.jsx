import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./Demo1.scss";

const Demo = () => {
  let [num, setNum] = useState(0);

  // 函数组件中，还可以基于useRef来创建一个ref对象
  let box = useRef(null);
  console.log(box);
  useEffect(() => {}, []);

  return (
    <div className="demo">
      <span className="num" ref={num}>
        {num}
      </span>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        新增
      </Button>
    </div>
  );
};

/*
  // 可以基于React.createRef创建ref对象来获取想要的内容
  let box = React.createRef();
  useEffect(() => {
    console.log(box.current);
  }, []);

  return (
    <div className="demo">
      <span className="num" ref={box}>
        {num}
      </span>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          setNum(num + 1);
        }}
      >
        新增
      </Button>
    </div>
  );
};
*/
export default Demo;
