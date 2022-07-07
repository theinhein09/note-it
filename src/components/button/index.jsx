import React from "react";

const Button = (props) => {
  const { className, label } = props;
  return <button className={className}>{label}</button>;
};

export default Button;
