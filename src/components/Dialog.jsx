import PropTypes from "prop-types";
import React from "react";

const Dialog = (props) => {
  let { title, content, children } = props;
  children = React.Children.toArray(children);
  return (
    <div>
      <div className="header">
        <h2 className="title">{title}</h2>
      </div>
      <div className="content">{content}</div>
      <footer>
        {children.length > 0 ? <div className="footer">{children}</div> : null}
      </footer>
    </div>
  );
};

Dialog.defaultProps = {
  title: "温馨提示",
};

Dialog.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Dialog;
