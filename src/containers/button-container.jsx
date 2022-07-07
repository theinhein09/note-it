import React from "react";
import Button from "../components/button";
import PropTypes from "prop-types";

const ButtonContainer = (props) => {
  const { category } = props;
  let className =
    "outline-none hover:bg-black hover:text-white focus:bg-black focus:text-white font-display";

  switch (category) {
    case "icon-only":
      className += " w-6 h-6 grid place-content-center";
      break;
    default:
      className += " border border-black px-2 py-0.5";
      break;
  }

  return <Button {...props} className={className} />;
};

ButtonContainer.defaultProps = {
  category: "primary",
  type: "button",
};

ButtonContainer.propTypes = {
  category: PropTypes.oneOf(["primary", "icon-only"]),
  label: PropTypes.string,
  icon: PropTypes.node,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
};

export default ButtonContainer;
