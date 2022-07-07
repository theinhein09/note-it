import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";

const LoginForm = (props) => {
  const { handleSignIn } = props;

  const navigate = useNavigate();
  return (
    <form
      id="login-form"
      onSubmit={handleSignIn}
      className="border-black border max-w-xs flex flex-col p-1 gap-1"
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
      <br />
      <ButtonContainer label="Sign In" type="submit" form="login-form" />
      <ButtonContainer label="Sign Up" onClick={() => navigate("sign-up")} />
    </form>
  );
};

export default LoginForm;
