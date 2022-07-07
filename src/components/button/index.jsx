import React from "react";

const Button = (props) => {
  const { className, label, type } = props;
  return (
    <button className={className} type={type}>
      {label}
    </button>
  );
};

export default Button;
