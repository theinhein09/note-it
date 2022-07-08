import React from "react";
import BookPreviewContainer from "../../containers/book-preview-container";
import ButtonContainer from "../../containers/button-container";
import CreateBookFormContainer from "../../containers/create-book-form-container";
import DialogRenderButtonContainer from "../../containers/dialog-render-button-container";
import SectionsContainer from "../../containers/sections-container";
import UserSettingContainer from "../../containers/user-setting-container";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import {
  useSidebarContextState,
  useSidebarContextUpdater,
} from "../../contexts/sidebar-context";

const Sidebar = (props) => {
  const { selectedBook, sections, setSelectedPage } = props;
  const sidebar = useSidebarContextState();
  const { toggleSidebar } = useSidebarContextUpdater();

  return (
    <aside className="fixed top-0 left-0 flex">
      {sidebar && (
        <div
          role="presentation"
          className="m-auto min-h-screen min-w-[280px] border-r border-black bg-white"
        >
          <header className="flex items-center bg-black px-1 text-white">
            <h1 className="grow ">noteIt</h1>
            <UserSettingContainer />
            <DialogRenderButtonContainer
              buttonLabel="Create Book"
              render={(closeDialog) => (
                <CreateBookFormContainer closeDialog={closeDialog} />
              )}
            />
          </header>
          <BookPreviewContainer selectedBook={selectedBook} />
          <SectionsContainer
            sections={sections}
            setSelectedPage={setSelectedPage}
          />
        </div>
      )}
      <ButtonContainer
        onClick={toggleSidebar}
        icon={sidebar ? <CgChevronLeft /> : <CgChevronRight />}
        category="icon-only"
        className="bg-white"
      />
    </aside>
  );
};

export default Sidebar;
