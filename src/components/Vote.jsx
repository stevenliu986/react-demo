import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../ThemeContext";
import VoteFooter from "./VoteFooter";
import VoteMain from "./VoteMain";

const Vote = () => {
  const { store } = useContext(ThemeContext);
  let { supNum, oppNum } = store.getState();

  /* 
    组件完成第一次渲染后，把让组件更新的方法，放在store的事件池中
    为了让函数组件更新，需要创建一个方法来让组件更新，
    这个方法与业务逻辑没有任何关联，只是单纯的让组件进行更新
  */
  let [num, setNum] = useState(0);
  const update = () => {
    setNum(num + 1);
  };

  useEffect(() => {
    let unsubscribe = store.subscribe(update);
    return () => {
      unsubscribe();
    };
  }, [num]);

  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">React是很棒的前端框架</h2>
        <span className="num">{supNum + oppNum}</span>
      </div>
      <VoteMain />
      <VoteFooter />
    </div>
  );
};

export default Vote;
