import React from "react";
import DialogRenderButtonContainer from "../../containers/dialog-render-button-container";
import DialogContainer from "../../containers/dialog-container";

const EmptyDashboard = (props) => {
  return (
    <>
      <DialogRenderButtonContainer
        buttonLabel="Create New Book"
        render={(off) => <DialogContainer closeDialog={off}> </DialogContainer>}
      />
    </>
  );
};

export default EmptyDashboard;
