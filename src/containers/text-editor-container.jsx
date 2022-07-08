import React from "react";
import TextEditor from "../components/text-editor";
import PropTypes from "prop-types";

const TextEditorContainer = (props) => {
  return <TextEditor {...props} />;
};

TextEditor.propTypes = {
  selectedPage: PropTypes.object,
};

export default TextEditorContainer;
