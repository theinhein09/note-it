import React from "react";
import LoginForm from "../components/login-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import { login } from "../utils/fakeAPI";

const LoginFormContainer = (props) => {
  const { startLoading, finishLoading } = props;
  const setError = useErrorContextUpdater();

  const handleSubmit = async (event) => {
    startLoading();
    setError(null);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const user = await login(email, password);
    } catch (error) {
      setError(error);
    }
    finishLoading();
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};

export default LoginFormContainer;
