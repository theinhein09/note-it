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

const styles = {
  default: "grow px-2 mr-2 rounded-none border border-transparent",
  readOnly: "overflow-hidden text-ellipsis outline-none",
  editing: "border-black outline-none",
};

const EditableInputContainer = (props) => {
  const { content, id, customClassName } = props;
  const inputRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  const className = `${styles.default} ${customClassName} ${
    !state.isEditing ? styles.readOnly : styles.editing
  }`;

  const handleChange = (e) => {
    dispatch({ type: "onChange", payload: e.target.value });
  };

  const handleClick = () => {
    dispatch({ type: "onClick", payload: { content, id } });
    inputRef.current.focus();
  };

  const handleSave = () => {
    // TODO save CONTENT to DB.
  };

  return (
    <EditableInput
      ref={inputRef}
      {...props}
      editing={state}
      handleChange={handleChange}
      handleClick={handleClick}
      handleSave={handleSave}
      className={className}
    />
  );
};

EditableInputContainer.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  customClassName: PropTypes.string,
};

export default EditableInputContainer;
