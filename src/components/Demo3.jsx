import { Button } from "antd";
import React, { useEffect, useState } from "react";
import "./Demo1.scss";

const Demo = () => {
  const queryData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([10, 20, 30]);
      }, 1000);
    });
  };

  let [num, setNum] = useState(0),
    [x, setX] = useState(100);
  const handleClick = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    console.log("@1", num);
  });

  useEffect(() => {
    console.log("@2", num);
  }, []);

  useEffect(() => {
    console.log("@3", x);
  }, [x]);

  // 每次num的值改变都会执行
  useEffect(() => {
    console.log("@3", num);
  }, [num]);

  useEffect(() => {
    return () => {
      // 获取的是上一次的num的值
      console.log("@4", num);
    };
  });

  useEffect(() => {
    queryData().then((data) => console.log(data));
  });

  return (
    <div className="demo">
      <span className="num">{num}</span>
      <Button type="primary" size="small" onClick={handleClick}>
        新增
      </Button>
    </div>
  );
};

export default Demo;
