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
      <main className="flex flex-col items-center justify-center min-h-screen">
        <header className="w-full sm:max-w-md p-1 bg-black">
          <h1 className="text-white">noteIt</h1>
        </header>
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
