import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";
import { RiLoginBoxLine } from "react-icons/ri";
import { CgUser } from "react-icons/cg";

const LoginForm = (props) => {
  const { handleSignIn } = props;

  const navigate = useNavigate();
  return (
    <form
      id="login-form"
      onSubmit={handleSignIn}
      className="relative flex w-full grow flex-col gap-1 border border-l-[12px] border-black p-1 
      sm:aspect-[3/5] sm:max-w-md sm:grow-0"
    >
      <div role="presentation" className="mt-4 bg-black p-1 py-2 pl-4">
        <h1 className="text-white">noteIt</h1>
      </div>
      <div
        role="presentation"
        className="flex grow flex-col justify-center gap-2 px-6"
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
      </div>
      <br />
      <ButtonContainer
        label="Sign In"
        type="submit"
        form="login-form"
        icon={<RiLoginBoxLine />}
      />
      <ButtonContainer
        label="Sign Up"
        onClick={() => navigate("sign-up")}
        icon={<CgUser />}
      />
      <aside className="min-h-[200px] border border-black p-1 font-display">
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
