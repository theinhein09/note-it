import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import { FaEdit, FaRegSave } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const EditableInput = forwardRef((props, ref) => {
  const { handleChange, handleClick, handleSave, content, editing, className } =
    props;

  return (
    <>
      <input
        ref={ref}
        className={className}
        value={editing.isEditing ? editing.editingContent : content}
        readOnly={!editing.isEditing}
        onChange={handleChange}
      />
      {editing.isEditing ? (
        <ButtonContainer
          onClick={handleSave}
          icon={<FaRegSave />}
          category="icon-only"
        />
      ) : (
        <div className="w-8 " />
      )}
      {editing.isEditing ? (
        <ButtonContainer
          onClick={handleClick}
          icon={<MdClose />}
          category="icon-only"
        />
      ) : (
        <ButtonContainer
          onClick={handleClick}
          icon={<FaEdit />}
          category="icon-only"
        />
      )}
    </>
  );
});

EditableInput.propTypes = {
  content: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleSave: PropTypes.func,
  editing: PropTypes.object,
  className: PropTypes.string,
};

export default EditableInput;
