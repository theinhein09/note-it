import React from "react";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";

const LoginForm = (props) => {
  const { handleSignIn } = props;

  return (
    <form id="login-form" onSubmit={handleSignIn}>
      <InputContainer
        label="Email"
        type="email"
        name="email"
        id="login-email"
      />
      <InputContainer
        label="Password"
        type="password"
        name="password"
        id="login-password"
      />
      <ButtonContainer label="Sign In" type="submit" form="login-form" />
    </form>
  );
};

export default LoginForm;
