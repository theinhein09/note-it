import React from "react";

const SignupForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form id="signup-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="signup-email">Email</label>
      <input type="email" name="email" id="signup-email" />
      <label htmlFor="signup-password">Password</label>
      <input type="password" name="password" id="signup-password" />
      <button type="submit" form="signup-form">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
