import React, { StrictMode } from "react";
import LoginFormContainer from "../containers/login-form-container";

const Entry = () => {
  return (
    <StrictMode>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <LoginFormContainer />
      </main>
    </StrictMode>
  );
};

export default Entry;
