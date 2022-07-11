import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import toolbar from "./utils/toolbar";
import "./styles.css";

// TODO store data coming from DB.
const data = {
  entityMap: {},
  blocks: [
    {
      key: "637gr",
      text: "Initialized from content state.",
      type: "unstyled",
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

const TextEditor = (props) => {
  const { selectedPage, setCurrentContent } = props;
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [content, setContent] = useState(null);

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
