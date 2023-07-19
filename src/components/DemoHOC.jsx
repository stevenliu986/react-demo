import React from "react";

const DemoHOC = (props) => {
  return <div>我是DemoHOC</div>;
};

const TestHOC = (Component) => {
  return function (props) {
    // 真正要渲染的是DemoHOC组件，把从父组件获取的props传递DemoHOC
    return <DemoHOC {...props} />;
  };
};

export default TestHOC(DemoHOC);
