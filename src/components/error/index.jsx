import React from "react";

const Error = (props) => {
  const { children } = props;

  return <div role="alert">{children}</div>;
};

export default Error;
