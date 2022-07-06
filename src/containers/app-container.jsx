import React from "react";
import App from "../components/app";
import useBoolean from "../hooks/useBoolean";
import ModalContainer from "./modal-container";
import LoginFormContainer from "./login-form-container";
import SignupFormContainer from "./signup-form-container";
import DialogContainer from "./dialog-container";
import Loading from "../components/loading";

const AppContainer = () => {
  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();

  return (
    <App>
      <LoginFormContainer />
      <button onClick={openDialog}>Sign Up</button>
      {dialog && (
        <ModalContainer>
          <DialogContainer closeDialog={closeDialog}>
            <SignupFormContainer
              startLoading={startLoading}
              finishLoading={finishLoading}
            />
          </DialogContainer>
        </ModalContainer>
      )}
      {loading && (
        <ModalContainer>
          <Loading />
        </ModalContainer>
      )}
    </App>
  );
};

export default AppContainer;
