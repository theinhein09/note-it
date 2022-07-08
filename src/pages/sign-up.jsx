import React, { useState } from "react";
import useBoolean from "../hooks/useBoolean";
import SignupFormContainer from "../containers/signup-form-container";
import ErrorContainer from "../containers/error-container";
import ModalContainer from "../containers/modal-container";
import Loading from "../components/loading";

const SignUp = () => {
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();
  const [message, setMessage] = useState(null);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SignupFormContainer
          startLoading={startLoading}
          finishLoading={finishLoading}
          setMessage={setMessage}
        />
        <ErrorContainer />
      </main>
      {loading && (
        <ModalContainer>
          <Loading />
        </ModalContainer>
      )}
      {message && <ModalContainer>{message}</ModalContainer>}
    </>
  );
};

export default SignUp;
