import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContextState } from "../../contexts/user-context";
import Loading from "../loading";

const PrivateRoute = (props) => {
  const { children } = props;
  const { user, loading } = useUserContextState();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>{!user ? <Navigate to="login" replace /> : <>{children}</>}</>
      )}
    </>
  );
};

export default PrivateRoute;
