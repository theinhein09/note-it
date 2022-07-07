import React, { useState } from "react";
import useBoolean from "../hooks/useBoolean";
import LoginFormContainer from "../containers/login-form-container";
import ErrorContainer from "../containers/error-container";
import ModalContainer from "../containers/modal-container";
import SignupFormContainer from "../containers/signup-form-container";
import Loading from "../components/loading";
import DialogRenderButtonContainer from "../containers/dialog-render-button-container";

const Entry = () => {
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
      <DialogRenderButtonContainer
        buttonLabel="Sign Up"
        render={() => (
          <SignupFormContainer
            startLoading={startLoading}
            finishLoading={finishLoading}
            setMessage={setMessage}
          />
        )}
      />
      <ErrorContainer />
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
