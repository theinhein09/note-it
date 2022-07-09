import React from "react";
import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import ButtonContainer from "../../containers/button-container";

const Dialog = (props) => {
  const { children, closeDialog } = props;
  return (
    <div role="presentation" class="flex flex-col">
      <div role="presentation" className="mr-2 w-fit self-end bg-white">
        <ButtonContainer
          onClick={closeDialog}
          icon={<IoMdClose />}
          category="icon-only"
          className="h-6 w-6"
        />
      </div>
      <>{children}</>
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.node,
  closeDialog: PropTypes.func,
};

export default Dialog;
