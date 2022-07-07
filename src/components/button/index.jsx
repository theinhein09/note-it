import React from "react";

const Button = (props) => {
  const { className, label, type, icon, onClick } = props;
  return (
    <button className={className} type={type} onClick={onClick}>
      {label}
      {icon}
    </button>
  );
};

export default Button;
