import React from "react";

const Modal = (props) => {
  const { children } = props;
  return (
    <div
      role="presentation"
      className="absolute w-screen h-screen  bg-white/50 top-0 backdrop-blur-sm grid place-content-center"
    >
      {children}
    </div>
  );
};

export default Modal;
