import React from "react";
import common from "./CommonStyle.module.css";
import style from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={style.box}>
      {/* 如果要使用多个样式， 就需要用模板字符串来进行拼接 */}
      <h2 className={`${style.title} ${common.hoverColor}`}>购物商城</h2>
      <div className={style.list}>
        <a href="#">首页</a>
        <a href="#">秒杀</a>
        <a href="#">我的</a>
      </div>
    </nav>
  );
};

export default Nav;
