import React from "react";
import PropTypes from "prop-types";
import Input from "../components/input";

const InputContainer = (props) => {
  const { onChange } = props;

  const handleChange = (event) => {
    if (typeof onChange === "function") onChange(event);
  };

  return <Input {...props} handleChange={handleChange} />;
};

InputContainer.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["email", "text", "password"]),
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputContainer;
