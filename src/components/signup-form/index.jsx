import React from "react";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";

const SignupForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form
      id="signup-form"
      onSubmit={handleSubmit}
      className="flex w-full grow flex-col gap-1 border border-l-[12px] border-black p-1 sm:aspect-[3/5] sm:max-w-md sm:grow-0"
    >
      <div role="presentation" className="mt-4 bg-black p-1 py-2 pl-4">
        <h1 className="text-white">noteIt</h1>
      </div>
      <div
        role="presentation"
        className="flex grow flex-col justify-center gap-2 px-6"
      >
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
      <div
        role="presentation"
        className="min-h-[200px] border border-black p-1"
      />
    </form>
  );
};

export default SignupForm;
