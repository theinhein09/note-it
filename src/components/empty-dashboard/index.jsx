import React from "react";
import ButtonContainer from "../../containers/button-container";
import useBoolean from "../../hooks/useBoolean";
import CreateBookDialog from "../dialog/create-book-dialog";

const EmptyDashboard = (props) => {
  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();
  return (
    <div className="fixed top-1/2 left-1/2">
      <ButtonContainer label="Create Book" onClick={openDialog} />
      {dialog && <CreateBookDialog closeDialog={closeDialog} />}
    </div>
  );
};

export default EmptyDashboard;
