import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const data = [
  { id: 1, title: "Hello" },
  { id: 2, title: "World" },
  { id: 3, title: "React" },
];
// let text = "React Demo";
root.render(
  <>
    <h1>今日新闻</h1>
    <ul className="news">
      {data.map((item) => (
        <li key={item.id}>
          <em>{item.id}</em>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  </>
);

fetch("/jian/subscriptions/recommended_collections")
  .then((response) => response.json())
  .then((value) => console.log(value));
