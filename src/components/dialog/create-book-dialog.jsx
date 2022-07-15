import React from "react";
import PropTypes from "prop-types";
import ModalContainer from "../../containers/modal-container";
import DialogContainer from "../../containers/dialog-container";
import CreateBookFormContainer from "../../containers/create-book-form-container";

const CreateBookDialog = (props) => {
  return (
    <ModalContainer>
      <DialogContainer hideButton={true}>
        <CreateBookFormContainer {...props} />
      </DialogContainer>
    </ModalContainer>
  );
};

CreateBookDialog.propTypes = {};

export default CreateBookDialog;
