import React from "react";
import PropTypes from "prop-types";
import Input from "../components/input";

const InputContainer = (props) => {
  const { onChange, category } = props;

  let className =
    "outline-none hover:border hover:border-black focus:border-[1px] focus:border-black px-1 border-[1px] font-mono";

  switch (category) {
    default:
      className += " ";
      break;
  }

  const handleChange = (event) => {
    if (typeof onChange === "function") onChange(event);
  };

  return <Input {...props} handleChange={handleChange} className={className} />;
};

InputContainer.defaultProps = {
  type: "text",
  category: "primary",
};

InputContainer.propTypes = {
  onChange: PropTypes.func,
  category: PropTypes.oneOf(["primary"]),
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf(["email", "text", "password"]),
  name: PropTypes.string,
};

export default InputContainer;
