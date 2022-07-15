import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";
import { GoCheck } from "react-icons/go";
import ErrorContainer from "../../containers/error-container";
import { RiCloseLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SignupForm = (props) => {
  const { onSubmit, onChange, email, username, password } = props;
  const navigate = useNavigate();

  return (
    <form
      className="flex w-full grow flex-col gap-1 border border-l-[12px] border-black bg-white p-1 shadow-lg shadow-black sm:aspect-[3/5] sm:max-w-md sm:grow-0"
      onKeyDown={(e) => e.key === "Enter" && onSubmit()}
    >
      <div role="presentation" className="mt-4 bg-black p-1 py-2 pl-4">
        <h1 className="text-white">noteIt</h1>
      </div>
      <div
        role="presentation"
        className="flex grow flex-col justify-center gap-2 px-6"
      >
        <InputContainer
          label="Username"
          name="username"
          id="signup-username"
          value={username}
          onChange={onChange}
        />
        <InputContainer
          label="Email"
          type="email"
          name="email"
          id="signup-email"
          value={email}
          onChange={onChange}
        />
        <InputContainer
          label="Password"
          type="password"
          name="password"
          id="signup-password"
          value={password}
          onChange={onChange}
        />
        <ErrorContainer />
      </div>

      <br />
      <ButtonContainer label="Submit" icon={<GoCheck />} onClick={onSubmit} />
      <ButtonContainer
        label="Cancel"
        icon={<RiCloseLine />}
        onClick={() => navigate("/login")}
      />
      <div
        role="presentation"
        className="min-h-[200px] border border-black p-1"
      />
    </form>
  );
};

SignupForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  email: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
};

export default SignupForm;
