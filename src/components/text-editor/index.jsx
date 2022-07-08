import React from "react";
import PropTypes from "prop-types";
import RichTextEditor from "./rich-text-editor";

const TextEditor = (props) => {
  const { selectedPage } = props;

  return (
    <>
      {selectedPage && <>{selectedPage.title}</>}
      <RichTextEditor />
    </>
  );
};

TextEditor.propTypes = {
  selectedPage: PropTypes.object,
};

export default TextEditor;
