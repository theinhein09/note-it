import React from "react";
import PropTypes from "prop-types";
import ModalContainer from "../../containers/modal-container";
import DialogContainer from "../../containers/dialog-container";
import ButtonContainer from "../../containers/button-container";

const ConfirmationDialog = (props) => {
  const { onConfirm, closeDialog, message } = props;

  return (
    <ModalContainer>
      <DialogContainer hideButton={true}>
        <div className="bg-white font-display">
          <div className="bg-red-700 p-1 text-white">Caution</div>
          <div className="flex h-20 items-center justify-center p-2">
            {message}
          </div>
          <div className="flex justify-between p-1">
            <ButtonContainer
              label="Confirm"
              className="bg-red-700 text-white"
              onClick={onConfirm}
            />
            <ButtonContainer label="Cancel" onClick={closeDialog} />
          </div>
        </div>
      </DialogContainer>
    </ModalContainer>
  );
};

ConfirmationDialog.propTypes = {
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  closeDialog: PropTypes.func,
};

export default ConfirmationDialog;
