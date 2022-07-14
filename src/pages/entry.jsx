import React, { StrictMode } from "react";
import LoginFormContainer from "../containers/login-form-container";

const Entry = () => {
  return (
    <StrictMode>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/src/assets/images/entry-bg.svg')] bg-cover bg-repeat">
        <LoginFormContainer />
      </main>
    </StrictMode>
  );
};

export default Entry;
