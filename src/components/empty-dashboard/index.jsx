import React from "react";
import DialogRenderButtonContainer from "../../containers/dialog-render-button-container";
import DialogContainer from "../../containers/dialog-container";
import CreateBookFormContainer from "../../containers/create-book-form-container";

const EmptyDashboard = (props) => {
  return (
    <>
      <DialogRenderButtonContainer
        buttonLabel="Create New Book"
        render={(closeDialog) => (
          <DialogContainer closeDialog={closeDialog}>
            <CreateBookFormContainer closeDialog={closeDialog} />
          </DialogContainer>
        )}
      />
    </>
  );
};

export default EmptyDashboard;
