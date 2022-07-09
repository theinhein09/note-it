import React, { useReducer, useRef } from "react";
import PropTypes from "prop-types";
import EditableInput from "../components/editable-input";

const reducer = (state, action) => {
  switch (action.type) {
    case "onClick":
      return {
        isEditing: !state.isEditing,
        editingContent: action.payload.content,
        editingId: action.payload.id,
      };
    case "onChange":
      return {
        ...state,
        editingContent: action.payload,
      };
    default:
      throw new Error();
  }
};

const initialState = {
  isEditing: false,
  editingContent: "",
  editingId: "",
};

const EditableInputContainer = (props) => {
  const { content, id } = props;
  const inputRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: "onChange", payload: e.target.value });
  };

  const handleClick = () => {
    dispatch({ type: "onClick", payload: { content, id } });
    inputRef.current.focus();
  };

  return (
    <EditableInput
      ref={inputRef}
      {...props}
      editing={state}
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
};

EditableInputContainer.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default EditableInputContainer;
