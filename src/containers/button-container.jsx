import React from "react";
import Button from "../components/button";
import PropTypes from "prop-types";

const ButtonContainer = (props) => {
  const { category } = props;
  let className =
    "hover:bg-black hover:text-white focus:bg-black focus:text-white";

  switch (category) {
    default:
      className += " border-[1px] border-black";
      break;
  }

  return <Button {...props} className={className} />;
};

ButtonContainer.defaultProps = {
  category: "primary",
  type: "button",
};

ButtonContainer.propTypes = {
  category: PropTypes.oneOf(["primary"]),
  label: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

export default ButtonContainer;
