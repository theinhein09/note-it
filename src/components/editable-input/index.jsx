import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import { FaEdit } from "react-icons/fa";

const styles = {
  default: "grow px-2 mr-2 rounded-none border border-transparent",
  readOnly: "overflow-hidden text-ellipsis outline-none",
  editing: "border-black outline-none",
};

const EditableInput = forwardRef((props, ref) => {
  const { handleChange, handleClick, content, editing } = props;

  return (
    <>
      <input
        ref={ref}
        className={`${styles.default} ${
          !editing.isEditing ? styles.readOnly : styles.editing
        }`}
        value={editing.isEditing ? editing.editingContent : content}
        readOnly={!editing.isEditing}
        onChange={handleChange}
      />
      <ButtonContainer
        onClick={handleClick}
        icon={<FaEdit />}
        category="icon-only"
      />
    </>
  );
});

EditableInput.propTypes = {
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  editing: PropTypes.object,
};

export default EditableInput;
