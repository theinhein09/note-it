import React from "react";

const LoginForm = (props) => {
  const { handleSignIn } = props;

  return (
    <form id="login-form" onSubmit={handleSignIn}>
      <label htmlFor="login-email">Email</label>
      <input type="email" name="email" id="login-email" />
      <br />
      <label htmlFor="login-password">Password</label>
      <input type="password" name="password" id="login-password" />
      <br />
      <button type="submit" form="login-form">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
