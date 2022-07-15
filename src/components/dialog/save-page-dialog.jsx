import React from "react";
import PropTypes from "prop-types";
import ModalContainer from "../../containers/modal-container";
import DialogContainer from "../../containers/dialog-container";
import InputContainer from "../../containers/input-container";
import ButtonContainer from "../../containers/button-container";

const SavePageDialog = (props) => {
  const { handleInputChange, handleSave, closeDialog, page } = props;

  return (
    <ModalContainer>
      <DialogContainer hideButton={true}>
        <div role="presentation" className="bg-white font-display">
          <p className="bg-black p-1 text-white">Save Page</p>
          <div role="presentation" className="flex flex-col gap-2 px-1 py-3">
            <InputContainer
              label="Title"
              value={page.title}
              name="title"
              onChange={handleInputChange}
            />
            <InputContainer
              label="Section"
              value={page.section}
              name="section"
              onChange={handleInputChange}
            />
          </div>
          <div role="presentation" className="flex justify-between p-1">
            <ButtonContainer label="Save" onClick={handleSave} />
            <ButtonContainer label="Cancel" onClick={closeDialog} />
          </div>
        </div>
      </DialogContainer>
    </ModalContainer>
  );
};

SavePageDialog.propTypes = {
  handleInputChange: PropTypes.func,
  handleSave: PropTypes.func,
  closeDialog: PropTypes.func,
  page: PropTypes.object,
};

export default SavePageDialog;
