import React from "react";

const TextEditor = (props) => {
  const { selectedPage } = props;
  return <>{selectedPage && <>{selectedPage.title}</>}TextEditor</>;
};

export default TextEditor;
