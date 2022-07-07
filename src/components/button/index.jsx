import React from "react";

const Button = (props) => {
  const { className, label, type, icon, onClick, form } = props;
  return (
    <button className={className} type={type} onClick={onClick} form={form}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
