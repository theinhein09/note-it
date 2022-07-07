import React from "react";

const Modal = (props) => {
  const { children } = props;
  return (
    <div
      role="presentation"
      className="fixed w-screen h-screen   top-0 left-0  grid place-content-center"
    >
      {children}
    </div>
  );
};

export default Modal;
