import { Button } from "antd";
import React, { useState } from "react";

const Vote = (props) => {
  let [state, setState] = useState({
    supNum: 10,
    oppNum: 5,
  });

  const handle = (type) => {
    if (type === "sup") {
      setState({ supNum: state.supNum + 1 });
      return;
    }
    setState({ oppNum: state.oppNum + 1 });
  };
  return (
    <div className="vote-box">
      <div className="header">
        <h2>{props.title}</h2>{" "}
        <span>投票总人数：{state.supNum + state.oppNum}</span>
      </div>
      <div className="main">
        <p className="support">支持人数：{state.supNum}</p>
        <p className="opposite">反对人数：{state.oppNum}</p>
      </div>
      <Button type="primary" onClick={handle.bind(null, "sup")}>
        支持
      </Button>
      <Button type="primary" danger onClick={handle.bind(null, "opp")}>
        反对
      </Button>
    </div>
  );
};

export default Vote;
