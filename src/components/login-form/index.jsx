import React from "react";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";

const LoginForm = (props) => {
  const { handleSignIn } = props;

  return (
    <form
      id="login-form"
      onSubmit={handleSignIn}
      className="border-black border max-w-xs flex flex-col p-1"
    >
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
