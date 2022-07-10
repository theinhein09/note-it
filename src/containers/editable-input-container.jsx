import React, { useReducer, useRef } from "react";
import PropTypes from "prop-types";
import EditableInput from "../components/editable-input";

const reducer = (state, action) => {
  switch (action.type) {
    case "edit":
      return {
        isEditing: !state.isEditing,
        editingContent: action.payload.content,
        editingId: action.payload.id,
      };
    case "change":
      return {
        ...state,
        editingContent: action.payload,
      };
    case "cancel":
      return init(action.payload);
    default:
      throw new Error();
  }
};

const init = (initialState) => {
  return {
    ...initialState,
    isEditing: false,
  };
};

const styles = {
  default: "px-2 mr-2 rounded-none border border-transparent font-display",
  readOnly: "overflow-hidden text-ellipsis outline-none",
  editing: "border-black outline-none",
};

const EditableInputContainer = (props) => {
  const { content, id, customClassName } = props;
  const inputRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, { content, id }, init);

  const className = `${styles.default} ${customClassName} ${
    !state.isEditing ? styles.readOnly : styles.editing
  }`;

  const handleChange = (e) => {
    dispatch({ type: "change", payload: e.target.value });
  };

  const handleEdit = () => {
    dispatch({ type: "edit", payload: { content, id } });
    inputRef.current.focus();
  };

  const handleSave = () => {
    console.log(state);
    // TODO save CONTENT to DB.
  };

  const handleCancel = () => {
    dispatch({ type: "cancel", payload: { content, id } });
  };

  return (
    <EditableInput
      ref={inputRef}
      {...props}
      editing={state}
      onChange={handleChange}
      onEdit={handleEdit}
      onCancel={handleCancel}
      onSave={handleSave}
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
