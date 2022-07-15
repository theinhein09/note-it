import React from "react";
import Button from "../components/button";
import PropTypes from "prop-types";

const ButtonContainer = (props) => {
  const { category, className: customClassName } = props;
  const defaultClassName =
    "outline-none ease-in duration-150 transition-colors hover:bg-gray-500 shadow-sm shadow-black px-2 py-0.5 hover:text-white focus:bg-gray-500 focus:text-white font-display flex items-center gap-1 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-black";

  let categorizedClassName = "";

  switch (category) {
    case "icon-only":
      categorizedClassName = " w-8 h-8 justify-center ";
      break;
    default:
      categorizedClassName = " ";
      break;
  }

  const className = defaultClassName + categorizedClassName + customClassName;
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
  onClick: PropTypes.func,
  form: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ButtonContainer;
