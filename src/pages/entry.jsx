import React, { useState } from "react";
import useBoolean from "../hooks/useBoolean";
import LoginFormContainer from "../containers/login-form-container";
import ErrorContainer from "../containers/error-container";
import ModalContainer from "../containers/modal-container";
import Loading from "../components/loading";

const Entry = () => {
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();
  const [message, setMessage] = useState(null);

  return (
    <>
      <main className="grid place-content-center min-h-screen">
        <h1>noteIt</h1>
        <LoginFormContainer
          startLoading={startLoading}
          finishLoading={finishLoading}
          setMessage={setMessage}
        />

        <ErrorContainer />
        <aside className="border-black border p-1 font-display">
          <h2 className="underline underline-offset-1">Testing</h2>
          <p>Existing User</p>
          <p>Email: dyer_campbell@zomboid.ga</p>
          <p>Password: q</p>
          <p>New User</p>
          <p>Email: new_user@name.ad</p>
          <p>Password: q</p>
        </aside>
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

export default Entry;
