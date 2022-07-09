import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";
import { RiLoginBoxLine } from "react-icons/ri";
import { CgUser } from "react-icons/cg";
import ErrorContainer from "../../containers/error-container";
import ModalContainer from "../../containers/modal-container";
import Loading from "../loading";

const LoginForm = (props) => {
  const { handleSignIn, loading, email, password, onChange } = props;

  const navigate = useNavigate();
  return (
    <>
      <form
        id="login-form"
        onSubmit={handleSignIn}
        className="flex w-full grow flex-col gap-1 border border-l-[12px] border-black p-1 
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
            value={email}
            onChange={onChange}
          />
          <InputContainer
            label="Password"
            type="password"
            name="password"
            id="login-password"
            value={password}
            onChange={onChange}
          />
        </div>
        <ErrorContainer />
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
        <aside className="min-h-[200px] border border-black p-1 text-right font-display">
          <h2 className="underline underline-offset-1">Sample Test Accounts</h2>
          <br />
          <p>
            Email: <em>dyer_campbell@zomboid.ga</em>
          </p>
          <p>
            Password: <em>q</em>
          </p>
          <br />
          <p>
            Email: <em>new_user@name.ad</em>
          </p>
          <p>
            Password: <em>q</em>
          </p>
        </aside>
      </form>
      {loading && (
        <ModalContainer>
          <Loading />
        </ModalContainer>
      )}
    </>
  );
};

LoginForm.propTypes = {
  handleSignIn: PropTypes.func,
  loading: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func,
};

export default LoginForm;
