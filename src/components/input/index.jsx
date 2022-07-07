import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  const { label, id, type, name, handleChange } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} id={id} onChange={handleChange} />
      <br />
    </>
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {};

export default Input;
