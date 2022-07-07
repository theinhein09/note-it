import React from "react";
import BookPreviewContainer from "../../containers/book-preview-container";
import ButtonContainer from "../../containers/button-container";
import CreateBookFormContainer from "../../containers/create-book-form-container";
import DialogRenderButtonContainer from "../../containers/dialog-render-button-container";
import SectionsContainer from "../../containers/sections-container";
import UserSettingContainer from "../../containers/user-setting-container";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  useSidebarContextState,
  useSidebarContextUpdater,
} from "../../contexts/sidebar-context";

const Sidebar = (props) => {
  const { selectedBook, sections, setSelectedPage } = props;
  const sidebar = useSidebarContextState();
  const { toggleSidebar } = useSidebarContextUpdater();

  return (
    <aside role="presentation" className="fixed top-0 left-0 flex">
      {sidebar && (
        <aside className="min-h-screen min-w-[280px]  border-r border-black bg-white">
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
        </aside>
      )}
      <ButtonContainer
        onClick={toggleSidebar}
        icon={sidebar ? <FaChevronLeft /> : <FaChevronRight />}
        category="icon-only"
      />
    </aside>
  );
};

export default Sidebar;
