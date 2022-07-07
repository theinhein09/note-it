import React from "react";

const Input = (props) => {
  const { label, id, type, name, handleChange, className } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={className}
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
      />
      <br />
    </>
  );
};

export default Input;
