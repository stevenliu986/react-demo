import PropTypes from "prop-types";
import React from "react";

const DemoOne = (props) => {
  let { title, x, children } = props;

  // // 要对children进行处理，自定义的方法
  // if (!children) {
  //   // 如果children没有传，将children变为空数组
  //   children = [];
  // } else if (!Array.isArray(children)) {
  //   // 如何children只传了一个，即不是数组，将children变为只有一个元素的数组
  //   children = [children];
  // }

  // 可以基于React.Children对象中提供的方法对props.children进行处理，方法有：count/foreach/map/toArray等
  // 好处：在这些方法的内部，已经对children的各种形式做了处理
  children = React.Children.toArray(children);
  console.log(children);
  let headerSlot = [],
    footerSlot = [],
    defaultSlot = [];

  children.forEach((child) => {
    let { slot } = child.props;
    if (slot === "header") {
      headerSlot.push(child);
    } else if (slot === "footer") {
      footerSlot.push(child);
    } else {
      defaultSlot.push(child);
    }
  });
  return (
    <div className="box">
      {headerSlot}
      <br />
      <h2>{title}</h2>
      <h3>{x}</h3>
      <br />
      {footerSlot}
    </div>
  );
};

DemoOne.defaultProps = {
  x: 0,
};

DemoOne.propTypes = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number,
};

export default DemoOne;
