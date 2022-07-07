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
      className="border-black border w-full grow sm:grow-0 sm:aspect-[3/5] sm:max-w-md flex flex-col p-1 gap-1"
    >
      <div role="presentation" className="grow flex flex-col justify-center">
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
      </div>
      <br />
      <ButtonContainer label="Sign In" type="submit" form="login-form" />
      <ButtonContainer label="Sign Up" onClick={() => navigate("sign-up")} />
      <aside className="border-black border p-1 font-display">
        <h2 className="underline underline-offset-1">Testing</h2>
        <p>Existing User</p>
        <p>Email: dyer_campbell@zomboid.ga</p>
        <p>Password: q</p>
        <p>New User</p>
        <p>Email: new_user@name.ad</p>
        <p>Password: q</p>
      </aside>
    </form>
  );
};

export default LoginForm;
