import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../components/login-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import { login } from "../utils/mockAPI";
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
      finishLoading();
      if (user.emailVerified) {
        navigate("/");
      }
      throw new Error("Please verify your email to continue");
    } catch (error) {
      setError(error);
      finishLoading();
    }
  };
  return <LoginForm handleSignIn={handleSignIn} {...props} />;
};

LoginFormContainer.propTypes = {
  startLoading: PropTypes.func,
  finishLoading: PropTypes.func,
};

export default LoginFormContainer;
