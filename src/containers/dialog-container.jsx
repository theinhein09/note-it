import React from "react";
import Dialog from "../components/dialog";
import PropTypes from "prop-types";

const DialogContainer = (props) => {
  return <Dialog {...props} />;
};

DialogContainer.propTypes = {
  children: PropTypes.node,
  closeDialog: PropTypes.func,
};

export default DialogContainer;
