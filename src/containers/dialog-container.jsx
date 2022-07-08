import React from "react";
import Dialog from "../components/dialog";
import PropTypes from "prop-types";

const DialogContainer = (props) => {
  return <Dialog {...props} />;
};

Dialog.propTypes = {
  top: PropTypes.node,
  children: PropTypes.node,
  bot: PropTypes.node,
  closeDialog: PropTypes.func,
};

export default DialogContainer;
