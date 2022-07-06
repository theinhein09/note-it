import React from "react";
import { createPortal } from "react-dom";
import Modal from "../components/modal";

const ModalContainer = (props) => {
  const modalRoot = document.getElementById("modal-root");

  return createPortal(<Modal {...props} />, modalRoot);
};

export default ModalContainer;
