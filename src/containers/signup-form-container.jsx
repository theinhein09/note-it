import React from "react";
import SignupForm from "../components/signup-form";
import { useErrorContextUpdater } from "../contexts/error-context";

let users = {
  1: {
    id: "1",
    email: "thein.than.hein.th@gmail.com",
    password: "qwe",
  },
  2: {
    id: "2",
    email: "theinthanhein0402@gmail.com",
    password: "qwe",
  },
};

const createUser = (email, password) =>
  new Promise((resolve, reject) => {
    if (email === users[1].email && password === users[1].password) {
      return setTimeout(() => reject(new Error("User already exists.")), 1000);
    }
    setTimeout(() => resolve(Object.values({ email })), 1000);
  });

const SignupFormContainer = (props) => {
  const { startLoading, finishLoading, setMessage } = props;
  const setError = useErrorContextUpdater();

  const handleSubmit = async (event) => {
    startLoading();
    setError(null);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const user = await createUser(email, password);
      console.log(user);
      setMessage(
        "Verification email sent. Please Verify your email to continue."
      );
    } catch (error) {
      setError(error);
    }
    finishLoading();
  };
  return <SignupForm handleSubmit={handleSubmit} />;
};

export default SignupFormContainer;
