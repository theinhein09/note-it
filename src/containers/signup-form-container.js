import React from "react";
import SignupForm from "../components/signup-form";

const SignupFormContainer = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, username, password);
  };
  return <SignupForm handleSubmit={handleSubmit} />;
};

export default SignupFormContainer;
