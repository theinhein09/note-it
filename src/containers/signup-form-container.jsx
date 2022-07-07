import React from "react";
import SignupForm from "../components/signup-form";
import { useErrorContextUpdater } from "../contexts/error-context";

import { createUser } from "../utils/mockAPI";

const SignupFormContainer = (props) => {
  const { startLoading, finishLoading, setMessage, closeDialog } = props;
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
      await createUser(email, password);
      closeDialog();
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

export default SignupFormContainer;
