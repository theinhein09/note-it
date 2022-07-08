import React from "react";
import PropTypes from "prop-types";

const TextEditor = (props) => {
  const { selectedPage } = props;

  return <>{selectedPage && <>{selectedPage.title}</>}TextEditor</>;
};

TextEditor.propTypes = {
  selectedPage: PropTypes.object,
};

export default TextEditor;
