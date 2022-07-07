import React from "react";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";

const SignupForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form
      id="signup-form"
      onSubmit={handleSubmit}
      className="flex w-full grow flex-col gap-1 border border-black p-1 sm:aspect-[3/5] sm:max-w-md sm:grow-0"
    >
      <div role="presentation" className="flex grow flex-col justify-center">
        <InputContainer label="Username" name="username" id="signup-username" />
        <InputContainer
          label="Email"
          type="email"
          name="email"
          id="signup-email"
        />
        <InputContainer
          label="Password"
          type="password"
          name="password"
          id="signup-password"
        />
      </div>
      <br />
      <ButtonContainer label="Submit" type="submit" form="signup-form" />
    </form>
  );
};

export default SignupForm;
