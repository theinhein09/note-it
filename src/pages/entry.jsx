import React, { useState } from "react";
import useBoolean from "../hooks/useBoolean";
import LoginFormContainer from "../containers/login-form-container";
import ErrorContainer from "../containers/error-container";
import ModalContainer from "../containers/modal-container";
import DialogContainer from "../containers/dialog-container";
import SignupFormContainer from "../containers/signup-form-container";
import Loading from "../components/loading";

const Entry = () => {
  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();
  const [message, setMessage] = useState(null);

  return (
    <>
      <h1>noteIt</h1>
      <LoginFormContainer
        startLoading={startLoading}
        finishLoading={finishLoading}
      />
      <p>Existing User for Testing</p>
      <p>Email: dyer_campbell@zomboid.ga</p>
      <p>Password: q</p>
      <p>Test Password: q</p>
      <p>New User for Testing</p>
      <p>Email: new_user@name.ad</p>
      <p>Password: q</p>
      <button onClick={openDialog}>Sign Up</button>
      <ErrorContainer />
      {dialog && (
        <ModalContainer>
          <DialogContainer closeDialog={closeDialog}>
            <SignupFormContainer
              startLoading={startLoading}
              finishLoading={finishLoading}
              setMessage={setMessage}
            />
          </DialogContainer>
        </ModalContainer>
      )}
      {loading && (
        <ModalContainer>
          <Loading />
        </ModalContainer>
      )}
      {message && <ModalContainer>{message}</ModalContainer>}
    </>
  );
};

export default Entry;
