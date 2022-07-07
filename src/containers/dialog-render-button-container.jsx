import React from "react";
import DialogRenderButton from "../components/dialog-render-button.js";
import useBoolean from "../hooks/useBoolean.js";

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

export default DialogRenderButtonContainer;
