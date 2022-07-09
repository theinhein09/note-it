import React, { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import EditableInput from "../components/editable-input";

const EditableInputContainer = (props) => {
  const { content, id } = props;
  const inputRef = useRef(null);

  const [state, setState] = useState({
    isEditing: false,
    editingContent: "",
    editingId: "",
  });

  const editingMemo = useMemo(() => ({ state, setState }), [state]);

  const { state: editing } = editingMemo;

  const { setState: setEditing } = editingMemo;

  const handleChange = (e) => {
    setEditing((prev) => ({ ...prev, editingContent: e.target.value }));
  };

  const handleClick = () => {
    setEditing({
      isEditing: false,
      editingContent: "",
      editingId: "",
    });
    setEditing((prev) => ({
      ...prev,
      isEditing: !prev.isEditing,
      editingContent: content,
      editingId: id,
    }));
    inputRef.current.focus();
  };

  return (
    <EditableInput
      ref={inputRef}
      {...props}
      editing={editing}
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
