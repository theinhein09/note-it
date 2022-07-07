import React from "react";
import Modal from "../modal";
import DialogContainer from "../../containers/dialog-container";
import ButtonContainer from "../../containers/button-container";

const DialogRenderButton = (props) => {
  const { buttonLabel, dialog, render, closeDialog, handleClick } = props;

  return (
    <>
      <ButtonContainer label={buttonLabel} onClick={handleClick} />
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
