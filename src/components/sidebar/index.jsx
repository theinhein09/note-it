import React from "react";
import BookPreviewContainer from "../../containers/book-preview-container";
import CreateBookFormContainer from "../../containers/create-book-form-container";
import DialogRenderButtonContainer from "../../containers/dialog-render-button-container";
import SectionsContainer from "../../containers/sections-container";
import UserSettingContainer from "../../containers/user-setting-container";

const Sidebar = (props) => {
  const { selectedBook, sections, setSelectedPage } = props;
  return (
    <>
      <h1>noteIt</h1>
      <UserSettingContainer />
      <DialogRenderButtonContainer
        buttonLabel="Create Book"
        render={(closeDialog) => (
          <CreateBookFormContainer closeDialog={closeDialog} />
        )}
      />
      <BookPreviewContainer selectedBook={selectedBook} />
      <SectionsContainer
        sections={sections}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
};

export default Sidebar;
