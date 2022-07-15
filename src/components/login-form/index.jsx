import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ButtonContainer from "../../containers/button-container";
import InputContainer from "../../containers/input-container";
import { RiLockPasswordLine, RiLoginBoxLine } from "react-icons/ri";
import { CgUser } from "react-icons/cg";
import ErrorContainer from "../../containers/error-container";
import ModalContainer from "../../containers/modal-container";
import Loading from "../loading";

const LoginForm = (props) => {
  const { onLogin, loading, email, password, onChange, onPasswordReset } =
    props;

  const navigate = useNavigate();
  return (
    <>
      <form
        className="flex w-full grow flex-col gap-1 border border-l-[12px] border-black bg-white p-1 
      shadow-lg shadow-black sm:aspect-[3/5] sm:max-w-md sm:grow-0"
        onKeyDown={(e) => e.key === "Enter" && onLogin()}
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
          <ErrorContainer />
        </div>
        <br />
        <ButtonContainer
          label="Sign In"
          icon={<RiLoginBoxLine />}
          onClick={onLogin}
        />
        <ButtonContainer
          label="Sign Up"
          onClick={() => navigate("/sign-up")}
          icon={<CgUser />}
        />
        <ButtonContainer
          label="Reset Password"
          onClick={onPasswordReset}
          icon={<RiLockPasswordLine />}
        />
        <aside className="flex min-h-[200px] border border-black p-1 text-right font-display">
          <div role="presentation" className="w-full" />
          <table>
            <caption className="text-right underline underline-offset-1">
              Sample Test Accounts
            </caption>
            <tbody>
              <tr>
                <th className="pr-3">Email</th>
                <td>
                  <em>existing@user.test</em>
                </td>
              </tr>
              <tr>
                <th className="pr-3">Password</th>
                <td>
                  <em>existing</em>
                </td>
              </tr>
              <tr></tr>
              <tr>
                <th className="pr-3">Email</th>
                <td>
                  <em>new@user.test</em>
                </td>
              </tr>
              <tr>
                <th className="pr-3">Password</th>
                <td>
                  <em>newuser</em>
                </td>
              </tr>
            </tbody>
          </table>
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
  onLogin: PropTypes.func,
  loading: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func,
};

export default LoginForm;
