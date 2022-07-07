import React from "react";
import Modal from "../modal";

const DialogRenderButton = (props) => {
  const { buttonLabel, dialog, render, closeDialog, handleClick } = props;

  return (
    <>
      <button onClick={handleClick}>{buttonLabel}</button>
      {dialog && <Modal>{render(closeDialog)}</Modal>}
    </>
  );
};

export default DialogRenderButton;
