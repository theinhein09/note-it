import React from "react";
import App from "../components/app";
import useBoolean from "../hooks/useBoolean";
import ModalContainer from "./modal-container";
import LoginFormContainer from "./login-form-container";
import SignupFormContainer from "./signup-form-container";
import DialogContainer from "./dialog-container";

const AppContainer = () => {
  const [modal, { on, off }] = useBoolean(false);

  return (
    <App>
      <LoginFormContainer />
      <button onClick={on}>Sign Up</button>
      {modal && (
        <ModalContainer>
          <DialogContainer closeDialog={off}>
            <SignupFormContainer />
          </DialogContainer>
        </ModalContainer>
      )}
    </App>
  );
};

export default AppContainer;
