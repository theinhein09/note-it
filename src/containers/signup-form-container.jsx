import React from "react";
import PropTypes from "prop-types";
import SignupForm from "../components/signup-form";
import { useErrorContextUpdater } from "../contexts/error-context";

import { createUser } from "../utils/mockAPI";
import Authenticator from "../firebase/authenticator";

const SignupFormContainer = (props) => {
  const { startLoading, finishLoading, setMessage } = props;
  const setError = useErrorContextUpdater();

  const handleSubmit = async (event) => {
    startLoading();
    setError(null);
    setMessage(null);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      await Authenticator._createUserWithEmailAndPassword(email, password);
      // await createUser(email, password);
      finishLoading();
      setMessage(
        "Verification email sent. Please Verify your email to continue."
      );
    } catch (error) {
      setError(error);
      finishLoading();
    }
  };
  return <SignupForm handleSubmit={handleSubmit} />;
};

SignupFormContainer.propTypes = {
  startLoading: PropTypes.func,
  finishLoading: PropTypes.func,
  setMessage: PropTypes.func,
};

export default SignupFormContainer;
