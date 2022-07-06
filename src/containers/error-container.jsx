import React from "react";
import Error from "../components/error";
import { useErrorContextState } from "../contexts/error-context";

const ErrorContainer = () => {
  const error = useErrorContextState();

  if (!error) return;

  function makeCustomMessage(error) {
    switch (error.code) {
      case "auth/too-many-requests":
        return "Too many failed login attempts.";
      case "auth/user-not-found":
        return "User not found.";
      case "auth/email-already-exists":
      case "auth/email-already-in-use":
        return "User already exists.";
      case "auth/invalid-email":
        return "Invalid email.";
      case "auth/invalid-display-name":
        return "Invalid username.";
      case "auth/wrong-password":
        return "Incorrect password.";
      case "auth/internal-error":
        return "Password is required.";
      default:
        return error.message;
    }
  }

  let message = makeCustomMessage(error);

  return error && <Error>{message}</Error>;
};

export default ErrorContainer;