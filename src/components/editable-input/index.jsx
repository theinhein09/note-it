import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import { FaEdit, FaRegSave } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const EditableInput = forwardRef((props, ref) => {
  const {
    onChange,
    onCancel,
    onEdit,
    onSave,
    content,
    editing,
    className,
    type,
  } = props;

  return (
    <div role="presentation" className="flex gap-1">
      <input
        ref={ref}
        className={className}
        value={editing.isEditing ? editing.content : content}
        readOnly={!editing.isEditing}
        onChange={onChange}
        type={type}
      />
      {editing.isEditing ? (
        <ButtonContainer
          onClick={onSave}
          icon={<FaRegSave title="Save" />}
          category="icon-only"
        />
      ) : (
        <div className="w-8 " />
      )}
      {editing.isEditing ? (
        <ButtonContainer
          onClick={onCancel}
          icon={<MdClose title="Cancel Edit" />}
          category="icon-only"
        />
      ) : (
        <ButtonContainer
          onClick={onEdit}
          icon={<FaEdit title="Edit" />}
          category="icon-only"
        />
      )}
    </div>
  );
});

EditableInput.defaultProps = {
  type: "text",
};

EditableInput.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  onEdit: PropTypes.func,
  editing: PropTypes.object,
  className: PropTypes.string,
};

export default EditableInput;
