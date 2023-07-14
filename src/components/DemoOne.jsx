import PropTypes from "prop-types";

const DemoOne = (props) => {
  let { title, x, children } = props;

  // 要对children进行处理
  if (!children) {
    // 如果children没有传，将children变为空数组
    children = [];
  } else if (!Array.isArray(children)) {
    // 如何children只传了一个，即不是数组，将children变为只有一个元素的数组
    children = [children];
  }
  return (
    <div className="box">
      {children[0]}
      <h2>{title}</h2>
      <h3>{x}</h3>
      {children[children.length - 1]}
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
