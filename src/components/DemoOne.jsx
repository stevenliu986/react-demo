import PropTypes from "prop-types";

const DemoOne = (props) => {
  const { title, x } = props;
  return (
    <div className="box">
      <h2>{title}</h2>
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
