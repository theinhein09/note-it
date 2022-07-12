import React from "react";
import PropTypes from "prop-types";
import SignupForm from "../components/signup-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import Authenticator from "../firebase/authenticator";
import { useNavigate } from "react-router-dom";
import useFormData from "../hooks/useFormData";

const SignupFormContainer = (props) => {
  const { startLoading, finishLoading, setMessage } = props;
  const setError = useErrorContextUpdater();
  const navigate = useNavigate();
  const [{ username, email, password }, handleInputChange] = useFormData({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    startLoading();
    setError(null);
    setMessage(null);
    const profile = {
      displayName: username,
    };
    try {
      await Authenticator._createUserWithEmailAndPassword(
        email,
        password,
        profile
      );
      finishLoading();
      setMessage(
        "Verification email sent. Please Verify your email to continue."
      );
      setTimeout(() => {
        setMessage(null);
        navigate("/login");
      }, 1000);
    } catch (error) {
      setError(error);
      finishLoading();
    }
  };
  return (
    <SignupForm
      onSubmit={handleSubmit}
      onChange={handleInputChange}
      email={email}
      username={username}
      password={password}
    />
  );
};

SignupFormContainer.propTypes = {
  startLoading: PropTypes.func,
  finishLoading: PropTypes.func,
  setMessage: PropTypes.func,
};

export default SignupFormContainer;
