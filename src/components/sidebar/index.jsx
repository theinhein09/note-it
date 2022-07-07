import React from "react";
import BookPreviewContainer from "../../containers/book-preview-container";
import SectionsContainer from "../../containers/sections-container";
import UserSettingContainer from "../../containers/user-setting-container";

const Sidebar = (props) => {
  const { selectedBook, sections } = props;
  return (
    <>
      <h1>noteIt</h1>
      <UserSettingContainer />
      <BookPreviewContainer selectedBook={selectedBook} />
      <SectionsContainer sections={sections} />
    </>
  );
};

export default Sidebar;
