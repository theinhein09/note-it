import React, { StrictMode, useState } from "react";
import useBoolean from "../hooks/useBoolean";
import SignupFormContainer from "../containers/signup-form-container";
import ModalContainer from "../containers/modal-container";
import Loading from "../components/loading";

const bg = "bg-[url('/src/assets/images/entry-bg.svg')] bg-cover bg-repeat";

const SignUp = () => {
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();
  const [message, setMessage] = useState(null);

  return (
    <StrictMode>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <SignupFormContainer
          startLoading={startLoading}
          finishLoading={finishLoading}
          setMessage={setMessage}
        />
      </main>
      {loading && (
        <ModalContainer>
          <Loading />
        </ModalContainer>
      )}
      {message && (
        <ModalContainer>
          <div
            role="alert"
            className="max-w-prose font-display text-xl text-white"
          >
            {message}
          </div>
        </ModalContainer>
      )}
    </StrictMode>
  );
};

export default SignUp;
