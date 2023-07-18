import { Button } from "antd";
import React, { useMemo, useState } from "react";

const Demo = () => {
  let [supNum, setSupNum] = useState(10),
    [oppNum, setOppNum] = useState(5),
    [x, setX] = useState(0);

  let ratio;
  ratio = useMemo(() => {
    return ((supNum / (supNum + oppNum)) * 100).toFixed(2) + " %";
  }, [supNum, oppNum]);

  return (
    <div className="vote-box">
      <div className="main">
        <p>支持人数：{supNum}</p>
        <p>反对人数：{oppNum}</p>
        <p>支持比率：{ratio}</p>
        <p>X: {x}</p>
      </div>
      <Button
        type="primary"
        onClick={() => {
          setSupNum(supNum + 1);
        }}
      >
        支持
      </Button>
      <Button
        type="primary"
        danger
        onClick={() => {
          setOppNum(oppNum + 1);
        }}
      >
        反对
      </Button>
      &nbsp; &nbsp;&nbsp;
      <Button
        type="primary"
        onClick={() => {
          setX(x + 1);
        }}
      >
        X + 1
      </Button>
    </div>
  );
};

export default Demo;
