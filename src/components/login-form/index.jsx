import React from "react";

const LoginForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <input type="email" name="email" id="email" />
      <input type="password" name="password" id="password" />
      <button type="submit" form="login-form">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
