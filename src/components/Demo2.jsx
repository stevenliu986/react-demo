import { Button } from "antd";
import React, { useState } from "react";
import "./Demo1.scss";

// 需求：函数只更新一次，但最后的结果是20
const Demo = () => {
  let [x, setX] = useState(10);

  const handleClick = () => {
    for (let i = 0; i < 10; i++) {
      setX(
        (x) =>
          // x: 存储上一次的状态值
          x + 1
      );
    }
  };
  return (
    <div className="demo">
      <span className="num">{x}</span>
      <Button type="primary" size="small" onClick={handleClick}>
        新增
      </Button>
    </div>
  );
};

export default Demo;
