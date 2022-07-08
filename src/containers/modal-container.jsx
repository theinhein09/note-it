import React from "react";
import { createPortal } from "react-dom";
import Modal from "../components/modal";
import PropTypes from "prop-types";

const ModalContainer = (props) => {
  const modalRoot = document.getElementById("modal-root");

  return createPortal(<Modal {...props} />, modalRoot);
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default ModalContainer;
