import { Button } from "antd";
import React, { useState } from "react";
import "./Demo1.scss";

const Demo1 = () => {
  let [num, setNum] = useState(0);

  const handleClick = () => {
    setNum(++num);
  };
  return (
    <div className="demo">
      <span className="num">{num}</span>
      <Button type="primary" size="small" onClick={handleClick}>
        新增
      </Button>
    </div>
  );
};

export default Demo1;
