import React from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import ButtonContainer from "../../containers/button-container";

const Dialog = (props) => {
  const { children, closeDialog, hideButton = false } = props;
  return (
    <div role="presentation" className="flex flex-col shadow-md shadow-black">
      {!hideButton && (
        <div role="presentation" className="mr-2 w-fit self-end bg-white">
          <ButtonContainer
            onClick={closeDialog}
            icon={<IoMdClose />}
            category="icon-only"
            className="h-6 w-6"
          />
        </div>
      )}
      <>{children}</>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.node,
  closeDialog: PropTypes.func,
  hideButton: PropTypes.bool,
};

export default Dialog;
