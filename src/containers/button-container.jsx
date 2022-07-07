import React from "react";
import Button from "../components/button";
import PropTypes from "prop-types";

const ButtonContainer = (props) => {
  const { category, className } = props;
  let defaultClassName = `outline-none hover:bg-black hover:text-white focus:bg-black focus:text-white font-display flex items-center gap-1`;

  switch (category) {
    case "icon-only":
      defaultClassName += " w-8 h-8 justify-center";
      break;
    default:
      defaultClassName += " border border-black px-2 py-0.5";
      break;
  }

  const customClassName = defaultClassName + " " + className;

  return <Button {...props} customClassName={customClassName} />;
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
