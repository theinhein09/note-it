import React from "react";
import { GrClose } from "react-icons/gr";

const Dialog = (props) => {
  const { top, children, bot, closeDialog } = props;
  return (
    <>
      <>
        {top}
        <button onClick={closeDialog}>
          <GrClose />
        </button>
      </>
      <>{children}</>
      <>{bot}</>
    </>
  );
};

export default Dialog;
