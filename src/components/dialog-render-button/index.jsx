import React from "react";
import PropTypes from "prop-types";
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
          <DialogContainer hideButton={true} closeDialog={closeDialog}>
            {render(closeDialog)}
          </DialogContainer>
        </ModalContainer>
      )}
    </>
  );
};

DialogRenderButton.propTypes = {
  buttonLabel: PropTypes.string,
  dialog: PropTypes.bool,
  render: PropTypes.func,
  closeDialog: PropTypes.func,
  handleClick: PropTypes.func,
};

export default DialogRenderButton;
