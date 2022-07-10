import React from "react";
import PropTypes from "prop-types";
import SignupForm from "../components/signup-form";
import { useErrorContextUpdater } from "../contexts/error-context";
import Authenticator from "../firebase/authenticator";
import { useNavigate } from "react-router-dom";
import FireStore from "../firebase/firestore";

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
      const user = await Authenticator._createUserWithEmailAndPassword(
        email,
        password,
        profile
      );
      console.log(user);
      const usersFS = new FireStore("users");
      await usersFS.setDoc({ email, username }, user.uid);
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
  return <SignupForm handleSubmit={handleSubmit} />;
};

SignupFormContainer.propTypes = {
  startLoading: PropTypes.func,
  finishLoading: PropTypes.func,
  setMessage: PropTypes.func,
};

export default SignupFormContainer;
