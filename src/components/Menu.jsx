import React from "react";
import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.box}>
      <ul className={style.list}>
        <li>电脑</li>
        <li>手机</li>
        <li>家电</li>
      </ul>
    </div>
  );
};

export default Menu;
