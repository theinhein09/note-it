import React from "react";
import BookPreviewContainer from "../../containers/book-preview-container";
import UserSettingContainer from "../../containers/user-setting-container";

const Sidebar = (props) => {
  const { selectedBook } = props;
  return (
    <>
      <h1>noteIt</h1>
      <UserSettingContainer />
      <BookPreviewContainer selectedBook={selectedBook} />
    </>
  );
};

export default Sidebar;
