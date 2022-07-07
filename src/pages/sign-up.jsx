import React, { useState } from "react";
import PropTypes from "prop-types";
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
      <main className="grid place-content-center min-h-screen">
        <h1>noteIt</h1>
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

SignUp.propTypes = {};

export default SignUp;
