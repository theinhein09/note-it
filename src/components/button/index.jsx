import React from "react";

const Button = (props) => {
  const { customClassName, label, type, icon, onClick, form, title } = props;
  return (
    <button
      className={customClassName}
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

export default Button;
