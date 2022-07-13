import React from "react";
import PropTypes from "prop-types";

const Modal = (props) => {
  const { children } = props;
  return (
    <div
      role="presentation"
      className="fixed top-0 left-0  z-30 grid h-screen w-screen place-content-center bg-white/50 backdrop-blur-sm"
    >
      {children}
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
