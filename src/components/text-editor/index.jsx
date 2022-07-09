import React, { useState } from "react";
import PropTypes from "prop-types";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import toolbar from "./utils/toolbar";

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
  const content = data && convertFromRaw(data);
  const [editorState, setEditorState] = useState(() =>
    content ? EditorState.createWithContent(content) : EditorState.createEmpty()
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
