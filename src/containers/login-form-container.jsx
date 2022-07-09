import React from "react";
import LoginForm from "../components/login-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import { useNavigate } from "react-router-dom";
import { useUserContextUpdater } from "../contexts/user-context";
import Authenticator from "../firebase/authenticator";
import useBoolean from "../hooks/useBoolean";

const LoginFormContainer = (props) => {
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();
  const setError = useErrorContextUpdater();
  const setUser = useUserContextUpdater();
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    startLoading();
    setError(null);
    setUser(null);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const user = await Authenticator._signInWithEmailAndPassword(
        email,
        password
      );
      setUser(user);
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
  return <LoginForm handleSignIn={handleSignIn} loading={loading} {...props} />;
};

export default LoginFormContainer;
