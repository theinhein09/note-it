import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  const { user } = props;

  return <h2>{user.displayName}</h2>;
};

User.propTypes = {
  user: PropTypes.object,
};

export default User;
