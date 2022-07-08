import React from "react";
import DialogRenderButton from "../components/dialog-render-button";
import useBoolean from "../hooks/useBoolean.js";
import PropTypes from "prop-types";

const DialogRenderButtonContainer = (props) => {
  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();

  const handleClick = () => {
    openDialog();
  };

  return (
    <DialogRenderButton
      {...props}
      handleClick={handleClick}
      dialog={dialog}
      closeDialog={closeDialog}
    />
  );
};

DialogRenderButtonContainer.propTypes = {
  buttonLabel: PropTypes.string,
  render: PropTypes.func,
};

export default DialogRenderButtonContainer;
