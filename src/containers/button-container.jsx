import React from "react";
import Button from "../components/button";
import PropTypes from "prop-types";

const ButtonContainer = (props) => {
  const { category } = props;
  let className = "";

  switch (category) {
    case "primary":
      className = "border-[1px] border-black";
      break;
    default:
      break;
  }

  return <Button {...props} className={className} />;
};

ButtonContainer.defaultProps = {
  category: "primary",
};

ButtonContainer.propTypes = {
  category: PropTypes.oneOf(["primary"]),
  label: PropTypes.string.isRequired,
};

export default ButtonContainer;
