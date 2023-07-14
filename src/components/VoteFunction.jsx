// 函数式组件例子
import React, { useState } from "react";

const VoteFunction = (props) => {
  let [supportNumber, setSupportNumber] = useState(0);
  let [opponentNumber, setOpponentNumber] = useState(0);
  return (
    <>
      <div>
        <h2>投票的总人数为：{supportNumber + opponentNumber}</h2>
      </div>
      <div className="vote">
        <h2>支持的人数为：{supportNumber}</h2>
        <h2>反对的人数为：{opponentNumber}</h2>
      </div>
      <button
        onClick={() => {
          supportNumber++;
          setSupportNumber(supportNumber);
        }}
      >
        支持
      </button>
      <button
        onClick={() => {
          opponentNumber++;
          setOpponentNumber(opponentNumber);
        }}
      >
        反对
      </button>
    </>
  );
};

export default VoteFunction;
