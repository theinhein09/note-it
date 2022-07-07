import React from "react";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";

const SignupForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form
      id="signup-form"
      onSubmit={handleSubmit}
      className="border-black border w-full grow sm:grow-0 sm:aspect-[3/5] sm:max-w-md flex flex-col p-1 gap-1"
    >
      <div role="presentation" className="grow flex flex-col justify-center">
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
