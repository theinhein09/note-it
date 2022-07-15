import React from "react";
import PropTypes from "prop-types";
import BookPreviewContainer from "../../containers/book-preview-container";
import ButtonContainer from "../../containers/button-container";
import SectionsContainer from "../../containers/sections-container";
import UserSettingContainer from "../../containers/user-setting-container";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import {
  useSidebarContextState,
  useSidebarContextUpdater,
} from "../../contexts/sidebar-context";
import { useUserContextState } from "../../contexts/user-context";
import { useParams } from "react-router-dom";
import CreateBookDialog from "../dialog/create-book-dialog";
import useBoolean from "../../hooks/useBoolean";

const Sidebar = (props) => {
  const { bookId } = useParams();
  const {
    selectedBook,
    setSelectedBook,
    sections,
    setSelectedPage,
    onAddPage,
  } = props;
  const sidebar = useSidebarContextState();
  const { toggleSidebar } = useSidebarContextUpdater();
  const { user } = useUserContextState();
  const [dialog, { on: openDialog, off: closeDialog }] = useBoolean();

  return (
    <>
      <aside className="fixed top-0 left-0 z-10 flex min-h-screen  flex-col bg-white shadow-md shadow-black">
        {sidebar && (
          <div role="presentation" className="min-w-[280px] grow">
            <header className="flex h-8 items-center bg-black px-1 text-white">
              <h1 className="grow">noteIt</h1>
              {!bookId ? (
                <ButtonContainer label="Create Book" onClick={openDialog} />
              ) : (
                <ButtonContainer label="Add New Page" onClick={onAddPage} />
              )}
            </header>
            <div role="presentation">
              <BookPreviewContainer
                selectedBook={selectedBook}
                setSelectedBook={setSelectedBook}
              />
              <SectionsContainer
                sections={sections}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <footer className="fixed bottom-0 flex min-w-[280px] items-center gap-2 self-end bg-black font-display text-white">
              <span className="grow text-right">{user.displayName}</span>
              <UserSettingContainer />
            </footer>
          </div>
        )}
        <ButtonContainer
          onClick={toggleSidebar}
          icon={sidebar ? <TiChevronLeft /> : <TiChevronRight />}
          category="icon-only"
          className="absolute top-0 -right-8 border border-l-0 border-black bg-black text-white"
        />
      </aside>
      {dialog && <CreateBookDialog closeDialog={closeDialog} />}
    </>
  );
};

Sidebar.propTypes = {
  selectedBook: PropTypes.object,
  sections: PropTypes.object,
  setSelectedPage: PropTypes.func,
  setSelectedBook: PropTypes.func,
};

export default Sidebar;
