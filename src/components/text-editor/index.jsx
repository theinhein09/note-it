import React, { useState } from "react";
import PropTypes from "prop-types";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import toolbar from "./utils/toolbar";

const TextEditor = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <Editor
      editorState={editorState}
      toolbarClassName="font-display"
      wrapperClassName="wrapperClassName"
      editorClassName="px-2"
      onEditorStateChange={setEditorState}
      toolbar={toolbar}
    />
  );
};

TextEditor.propTypes = {
  selectedPage: PropTypes.object,
};

export default TextEditor;
