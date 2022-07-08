import React from "react";

const Modal = (props) => {
  const { children } = props;
  return (
    <div
      role="presentation"
      className="fixed top-0 left-0  z-30 grid h-screen w-screen place-content-center bg-black/50  ring-1 backdrop-blur-sm"
    >
      {children}
    </div>
  );
};

export default Modal;
