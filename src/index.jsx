import React from "react";
import ReactDOM from "react-dom/client";
import VoteFunction from "./components/VoteFunction";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <VoteFunction title="React入门还是比较容易的！" />
  </>
);

// import Dialog from "./components/Dialog";
// root.render(
//   <>
//     <Dialog title="友情提示" content="好好学习，天天向上" />
//     <Dialog content="学好React很有用！">
//       <button>确定</button>
//       <button>不确定</button>
//     </Dialog>
//   </>
// );

// import DemoOne from "./components/DemoOne";
// root.render(
//   <>
//     <DemoOne title="React">
//       <span slot="footer">我是页脚</span>
//       <span>呵呵</span>
//       <span slot="header">我是页眉</span>
//     </DemoOne>
//   </>
// );

// fetch("/jian/subscriptions/recommended_collections")
//   .then((response) => response.json())
//   .then((value) => console.log(value));
