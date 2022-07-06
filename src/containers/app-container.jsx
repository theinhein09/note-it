import React from "react";
import App from "../components/app";
import useBoolean from "../hooks/useBoolean";
import ModalContainer from "./modal-container";
import LoginFormContainer from "./login-form-container";
import SignupFormContainer from "./signup-form-container";
import DialogContainer from "./dialog-container";
import Loading from "../components/loading";
import ErrorContainer from "../containers/error-container";

const AppContainer = () => {
  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();

  return (
    <App>
      <LoginFormContainer />
      <button onClick={openDialog}>Sign Up</button>
      <ErrorContainer />
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
