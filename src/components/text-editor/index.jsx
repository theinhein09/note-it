import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import toolbar from "./utils/toolbar";

const TextEditor = (props) => {
  const { selectedPage, setCurrentContent } = props;
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [content, setContent] = useState(null);

  const setEditorRef = (ref) => {
    ref && ref.focus();
  };

  useEffect(() => {
    if (!selectedPage) {
      return setEditorState(() => EditorState.createEmpty());
    }
    const data = JSON.parse(selectedPage.content);
    setContent(convertFromRaw(data));
  }, [selectedPage]);

  useEffect(() => {
    if (!content) return;
    setEditorState(() => EditorState.createWithContent(content));
  }, [content]);

  return (
    <Editor
      editorRef={setEditorRef}
      editorState={editorState}
      toolbarClassName="font-display"
      wrapperClassName="wrapperClassName"
      editorClassName="px-2"
      onEditorStateChange={setEditorState}
      onContentStateChange={setCurrentContent}
      toolbar={toolbar}
    />
  );
};

TextEditor.propTypes = {
  selectedPage: PropTypes.object,
  setCurrentContent: PropTypes.func,
};

export default TextEditor;
