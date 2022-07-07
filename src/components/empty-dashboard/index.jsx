import React from "react";
import DialogRenderButtonContainer from "../../containers/dialog-render-button-container";
import CreateBookFormContainer from "../../containers/create-book-form-container";

const EmptyDashboard = (props) => {
  return (
    <>
      <DialogRenderButtonContainer
        buttonLabel="Create New Book"
        render={(closeDialog) => (
          <CreateBookFormContainer closeDialog={closeDialog} />
        )}
      />
    </>
  );
};

export default EmptyDashboard;
