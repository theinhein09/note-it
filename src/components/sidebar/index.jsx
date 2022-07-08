import React from "react";
import PropTypes from "prop-types";
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
import { useUserContextState } from "../../contexts/user-context";

const Sidebar = (props) => {
  const { selectedBook, sections, setSelectedPage } = props;
  const sidebar = useSidebarContextState();
  const { toggleSidebar } = useSidebarContextUpdater();
  const user = useUserContextState();

  return (
    <aside className="fixed top-0 left-0 z-10 flex">
      {sidebar && (
        <div
          role="presentation"
          className="m-auto flex min-h-screen min-w-[280px] flex-col border-r border-black bg-white"
        >
          <header className="flex items-center bg-black px-1 text-white">
            <h1 className="grow ">noteIt</h1>
            <DialogRenderButtonContainer
              buttonLabel="Create New Book"
              render={(closeDialog) => (
                <CreateBookFormContainer closeDialog={closeDialog} />
              )}
            />
          </header>
          <div role="presentation" className="grow">
            <BookPreviewContainer selectedBook={selectedBook} />
            <SectionsContainer
              sections={sections}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <footer className="flex items-center bg-black font-display text-white">
            <span className="grow text-right">{user.displayName}</span>
            <UserSettingContainer />
          </footer>
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

Sidebar.propTypes = {
  selectedBook: PropTypes.object,
  sections: PropTypes.object,
  setSelectedPage: PropTypes.func,
};

export default Sidebar;
