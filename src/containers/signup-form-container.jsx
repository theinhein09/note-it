import React from "react";
import SignupForm from "../components/signup-form";
import { useErrorContextUpdater } from "../contexts/error-context";

import { createUser } from "../utils/fakeAPI";

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
      const user = await createUser(email, password);
      console.log(user);
      setMessage(
        "Verification email sent. Please Verify your email to continue."
      );
    } catch (error) {
      setError(error);
    }
    finishLoading();
  };
  return <SignupForm handleSubmit={handleSubmit} />;
};

export default SignupFormContainer;
