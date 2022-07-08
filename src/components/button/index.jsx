import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { className, label, type, icon, onClick, form, title } = props;

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      form={form}
      title={title}
    >
      {icon && icon}
      {label && label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["submit", "reset", "button"]),
  icon: PropTypes.node,
  onClick: PropTypes.func,
  form: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
