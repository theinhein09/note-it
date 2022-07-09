import React from "react";
import PropTypes from "prop-types";
import SignupForm from "../components/signup-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import Authenticator from "../firebase/authenticator";
import { useNavigate } from "react-router-dom";

const SignupFormContainer = (props) => {
  const { startLoading, finishLoading, setMessage } = props;
  const setError = useErrorContextUpdater();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    startLoading();
    setError(null);
    setMessage(null);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const profile = {
      displayName: username,
    };
    try {
      await Authenticator._createUserWithEmailAndPassword(
        email,
        password,
        profile
      );
      // await createUser(email, password);
      finishLoading();
      setMessage(
        "Verification email sent. Please Verify your email to continue."
      );
      setTimeout(() => {
        setMessage(null);
        navigate("login");
      }, 1000);
    } catch (error) {
      setError(error);
      finishLoading();
    }
  };
  return <SignupForm handleSubmit={handleSubmit} />;
};

SignupFormContainer.propTypes = {
  startLoading: PropTypes.func,
  finishLoading: PropTypes.func,
  setMessage: PropTypes.func,
};

export default SignupFormContainer;
