import { useReducer } from "react";

const toggle = (currentValue, newValue) => {
  return typeof newValue === "boolean" ? newValue : !currentValue;
};

const useToggle = (initialValue = false) => {
  return useReducer(toggle, initialValue);
};

export default useToggle;
