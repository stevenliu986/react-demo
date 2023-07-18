import { Button } from "antd";
import React, { useState, useEffect, useRef } from "react";
import "./Demo1.scss";

const Demo = () => {
  let [num, setNum] = useState(0);

  return (
    <div className="demo">
      <span className="num">{num}</span>
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

export default Demo;
