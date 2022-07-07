import React from "react";
import Modal from "../modal";
import DialogContainer from "../../containers/dialog-container";

const DialogRenderButton = (props) => {
  const { buttonLabel, dialog, render, closeDialog, handleClick } = props;

  return (
    <>
      <button onClick={handleClick}>{buttonLabel}</button>
      {dialog && (
        <Modal>
          <DialogContainer closeDialog={closeDialog}>
            {render(closeDialog)}
          </DialogContainer>
        </Modal>
      )}
    </>
  );
};

export default DialogRenderButton;
