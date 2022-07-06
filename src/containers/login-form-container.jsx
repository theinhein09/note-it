import React from "react";
import LoginForm from "../components/login-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import { login } from "../utils/fakeAPI";
import { useNavigate } from "react-router-dom";

const LoginFormContainer = (props) => {
  const { startLoading, finishLoading } = props;
  const setError = useErrorContextUpdater();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    startLoading();
    setError(null);
    event.preventDefault();
    let user;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      user = await login(email, password);
    } catch (error) {
      setError(error);
    }
    finishLoading();
    navigate(`${user.id}`);
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};

export default LoginFormContainer;
