import React from "react";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";

const SignupForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form id="signup-form" onSubmit={handleSubmit}>
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
      <ButtonContainer label="Submit" type="submit" form="signup-form" />
    </form>
  );
};

export default SignupForm;
