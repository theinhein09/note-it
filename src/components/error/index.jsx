import React from "react";
import PropTypes from "prop-types";

const Error = (props) => {
  const { children } = props;

  return (
    <div role="alert" className="text-red-600">
      {children}
    </div>
  );
};

Error.propTypes = {
  children: PropTypes.node,
};

export default Error;
