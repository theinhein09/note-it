import React from "react";
import LoginForm from "../components/login-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import { useNavigate } from "react-router-dom";
import { useUserContextUpdater } from "../contexts/user-context";
import Authenticator from "../firebase/authenticator";
import useBoolean from "../hooks/useBoolean";
import useFormData from "../hooks/useFormData";

const LoginFormContainer = (props) => {
  const [loading, { on: startLoading, off: finishLoading }] = useBoolean();
  const setError = useErrorContextUpdater();
  const setUser = useUserContextUpdater();
  const navigate = useNavigate();
  const [{ email, password }, handleInputChange, handleResetForm] = useFormData(
    {
      email: "",
      password: "",
    }
  );

  const handleLogin = async (event) => {
    startLoading();
    setError(null);
    setUser(null);
    try {
      const user = await Authenticator._signInWithEmailAndPassword(
        email,
        password
      );
      setUser(user);
      finishLoading();
      if (user.emailVerified) {
        return navigate("/");
      }
      throw new Error("Please verify your email to continue");
    } catch (error) {
      setError(error);
      handleResetForm();
      finishLoading();
    }
  };

  const handlePasswordReset = async (event) => {
    startLoading();
    setError(null);
    try {
      await Authenticator._sendPasswordResetEmail(email);
      finishLoading();
    } catch (error) {
      setError(error);
      handleResetForm();
      finishLoading();
    }
  };

  return (
    <LoginForm
      onLogin={handleLogin}
      onChange={handleInputChange}
      onPasswordReset={handlePasswordReset}
      email={email}
      password={password}
      loading={loading}
      {...props}
    />
  );
};

export default LoginFormContainer;
