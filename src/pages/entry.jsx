import React from "react";
import LoginFormContainer from "../containers/login-form-container";

const Entry = () => {
  return (
    <main className="bg-[url('../assets/images/entry-bg.svg')]flex min-h-screen flex-col items-center justify-center">
      <LoginFormContainer />
    </main>
  );
};

export default Entry;
