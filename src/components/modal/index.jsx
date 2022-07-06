import React from "react";

const Modal = (props) => {
  const { children } = props;
  return <div role="presentation">{children}</div>;
};

export default Modal;
