import React, { useState } from "react";
import useBoolean from "../hooks/useBoolean";
import SignupFormContainer from "../containers/signup-form-container";
import ErrorContainer from "../containers/error-container";
import ModalContainer from "../containers/modal-container";
import Loading from "../components/loading";

const SignUp = (props) => {
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();
  const [message, setMessage] = useState(null);

  return (
    <>
      <main className="flex flex-col items-center min-h-screen justify-center">
        <header className="w-full sm:max-w-md p-1 bg-black">
          <h1 className="text-white">noteIt</h1>
        </header>
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
