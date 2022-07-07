import React from "react";
import DialogContainer from "../../containers/dialog-container";
import ButtonContainer from "../../containers/button-container";
import ModalContainer from "../../containers/modal-container";

const DialogRenderButton = (props) => {
  const { buttonLabel, dialog, render, closeDialog, handleClick } = props;

  return (
    <>
      <ButtonContainer label={buttonLabel} onClick={handleClick} />
      {dialog && (
        <ModalContainer>
          <DialogContainer closeDialog={closeDialog}>
            {render(closeDialog)}
          </DialogContainer>
        </ModalContainer>
      )}
    </>
  );
};

export default DialogRenderButton;
