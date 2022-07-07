import React from "react";
import ButtonContainer from "../../containers/button-container";
import DialogRenderButtonContainer from "../../containers/dialog-render-button-container";
import InputContainer from "../../containers/input-container";
import SignupFormContainer from "../../containers/signup-form-container";

const LoginForm = (props) => {
  const { handleSignIn, startLoading, finishLoading, setMessage } = props;

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
      <ButtonContainer label="Sign In" type="submit" />
      <DialogRenderButtonContainer
        buttonLabel="Sign Up"
        render={(closeDialog) => (
          <SignupFormContainer
            startLoading={startLoading}
            finishLoading={finishLoading}
            setMessage={setMessage}
            closeDialog={closeDialog}
          />
        )}
      />
    </form>
  );
};

export default LoginForm;
