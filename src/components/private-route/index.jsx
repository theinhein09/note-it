import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContextState } from "../../contexts/user-context";

const PrivateRoute = (props) => {
  const { children } = props;
  const user = useUserContextState();

  return <>{!user ? <Navigate to="login" replace /> : <>{children}</>}</>;
};

export default PrivateRoute;
