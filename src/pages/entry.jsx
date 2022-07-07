import React from "react";
import useBoolean from "../hooks/useBoolean";
import LoginFormContainer from "../containers/login-form-container";
import ErrorContainer from "../containers/error-container";
import ModalContainer from "../containers/modal-container";
import Loading from "../components/loading";

const Entry = () => {
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <LoginFormContainer
          startLoading={startLoading}
          finishLoading={finishLoading}
        />
        <ErrorContainer />
      </main>
      {loading && (
        <ModalContainer>
          <Loading />
        </ModalContainer>
      )}
    </>
  );
};

export default Entry;
