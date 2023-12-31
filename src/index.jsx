import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContext from "./ThemeContext";
import Vote from "./components/Vote";
import store from "./store";
// import Demo from "./components/Demo5";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    <ThemeContext value={{ store }}>
      <Vote />
    </ThemeContext>
  </ConfigProvider>
);
/*
import Menu from "./components/Menu";
import Nav from "./components/Nav";
root.render(
  <ConfigProvider locale={zhCN}>
    <Nav />
    <Menu />
  </ConfigProvider>
);

root.render(
  <ConfigProvider locale={zhCN}>
    <Vote title="踊跃投票" />
  </ConfigProvider>
);


import Task from "./components/Task";
root.render(
  <ConfigProvider locale={zhCN}>
    <Task />
  </ConfigProvider>
);

import VoteClass from "./components/VoteClass";
import "./index.scss";
root.render(
  <>
    <VoteClass title="React入门还是比较容易的！" />
  </>
);

import VoteFunction from "./components/VoteFunction";
root.render(
  <>
    <VoteFunction title="React入门还是比较容易的！" />
  </>
);

import Dialog from "./components/Dialog";
root.render(
  <>
    <Dialog title="友情提示" content="好好学习，天天向上" />
    <Dialog content="学好React很有用！">
      <button>确定</button>
      <button>不确定</button>
    </Dialog>
  </>
);

import DemoOne from "./components/DemoOne";
root.render(
  <>
    <DemoOne title="React">
      <span slot="footer">我是页脚</span>
      <span>呵呵</span>
      <span slot="header">我是页眉</span>
    </DemoOne>
  </>
);

fetch("/jian/subscriptions/recommended_collections")
  .then((response) => response.json())
  .then((value) => console.log(value));
*/
