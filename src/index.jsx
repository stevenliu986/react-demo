import React from "react";
import ReactDOM from "react-dom/client";
import Dialog from "./components/Dialog";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const data = [
//   { id: 1, title: "Hello" },
//   { id: 2, title: "World" },
//   { id: 3, title: "React" },
// ];
// let text = "React Demo";
root.render(
  <>
    <Dialog />
  </>
);

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
