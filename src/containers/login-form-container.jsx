import React from "react";
import LoginForm from "../components/login-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import { login } from "../utils/fakeAPI";
import { useNavigate } from "react-router-dom";
import { useUserContextUpdater } from "../contexts/user-context";

const LoginFormContainer = (props) => {
  const { startLoading, finishLoading } = props;
  const setError = useErrorContextUpdater();
  const setUser = useUserContextUpdater();
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    startLoading();
    setError(null);
    setUser(null);
    event.preventDefault();
    let user;
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      user = await login(email, password);
      setUser(user);
      sessionStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      setError(error);
    }
    finishLoading();
    navigate(`${user.id}`);
  };
  return <LoginForm handleSignIn={handleSignIn} />;
};

export default LoginFormContainer;
