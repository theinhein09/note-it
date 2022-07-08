import React from "react";
import PropTypes from "prop-types";

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

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  className: PropTypes.string,
};

export default Input;
