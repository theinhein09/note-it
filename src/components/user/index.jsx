import React from "react";

const User = (props) => {
  const { user } = props;
  return <h2>{user.displayName}</h2>;
};

export default User;
