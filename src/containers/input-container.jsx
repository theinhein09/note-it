import React from "react";
import PropTypes from "prop-types";
import Input from "../components/input";

const InputContainer = (props) => {
  const { onChange, category } = props;

  let className =
    "my-2 outline-none hover:border-[1px] hover:border-black focus:border-[1px] focus:border-black px-1 border-[1px]";

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
  id: PropTypes.string,
  type: PropTypes.oneOf(["email", "text", "password"]),
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  category: PropTypes.oneOf(["primary"]),
};

export default InputContainer;
