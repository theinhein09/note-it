import React from "react";
import User from "../components/user";
import { useUserContextState } from "../contexts/user-context";

const UserContainer = (props) => {
  const { user } = useUserContextState();

  return <User {...props} user={user} />;
};

export default UserContainer;
