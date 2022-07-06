import React from "react";
import LoginForm from "../components/login-form";

const LoginFormContainer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};

export default LoginFormContainer;
