import React from "react";
import PropTypes from "prop-types";

const Error = (props) => {
  const { message } = props;

  return (
    <div role="alert" className="font-display text-red-600">
      {message && message}
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.node,
};

export default Error;
