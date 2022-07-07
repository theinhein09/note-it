import React from "react";

const Input = (props) => {
  const { label, id, type, name, handleChange, className } = props;

  return (
    <>
      <label htmlFor={id} className="font-display">
        {label}
      </label>
      <input
        className={className}
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
