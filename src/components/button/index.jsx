import React from "react";

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
      {icon && <span>{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
