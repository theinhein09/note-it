import React, { useMemo, useState } from "react";
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = useMemo(
    () => ({ ...formData, setFormData }),
    [formData]
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      finishLoading();
    }
  };

  return (
    <LoginForm
      onLogin={handleLogin}
      onChange={handleInputChange}
      email={email}
      password={password}
      loading={loading}
      {...props}
    />
  );
};

export default LoginFormContainer;
