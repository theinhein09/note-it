import { useReducer } from "react";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "change":
      const { name, value } = payload;
      return {
        ...state,
        [name]: value,
      };
    case "reset":
      return init(payload);
    default:
      throw new Error();
  }
};

const init = (initialState) => {
  return initialState;
};

const useFormData = (initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "change", payload: { name, value } });
  };

  const handleResetForm = () => {
    dispatch({ type: "reset", payload: initialState });
  };

  return [state, handleInputChange, handleResetForm];
};

export default useFormData;
