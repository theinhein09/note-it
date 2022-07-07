import React from "react";
import { GrClose } from "react-icons/gr";
import ButtonContainer from "../../containers/button-container";

const Dialog = (props) => {
  const { top, children, bot, closeDialog } = props;
  return (
    <>
      <>
        {top}
        <ButtonContainer
          onClick={closeDialog}
          icon={<GrClose />}
          category="icon-only"
        />
      </>
      <>{children}</>
      <>{bot}</>
    </>
  );
};

export default Dialog;
