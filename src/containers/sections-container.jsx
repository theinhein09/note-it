import React from "react";
import Sections from "../components/sections";
import PropTypes from "prop-types";
import FireStore from "../firebase/firestore";
import { useUserContextState } from "../contexts/user-context";
import { useParams } from "react-router-dom";
import { useSidebarContextUpdater } from "../contexts/sidebar-context";

const SectionsContainer = (props) => {
  const { setSelectedPage } = props;
  const { bookId } = useParams();
  const { user } = useUserContextState();
  const { closeSidebar } = useSidebarContextUpdater();

  const openPage = (page) => (event) => {
    setSelectedPage(page);
    closeSidebar();
  };

  const handlePageDelete = async (pageId) => {
    const pagesFS = new FireStore(
      `users/${user.uid}/books/${bookId}/pages`,
      pageId
    );
    await pagesFS.deleteDoc(pageId);
  };

  const handleSectionDelete = async (section) => {
    const pagesFS = new FireStore(`users/${user.uid}/books/${bookId}/pages`);
    const pages = await pagesFS.getDocs("section", "==", section);
    for (let page of pages) {
      await pagesFS.deleteDoc(page.id);
    }
  };

  const handlePageTitleSave = async (data) => {
    const { content: title, id } = data;
    const pagesFS = new FireStore(`/users/${user.uid}/books/${bookId}/pages`);
    await pagesFS.updateDoc({ title }, id);
  };

  const handleSectionSave = async (data) => {
    const { content: section, id } = data;
    const pagesFS = new FireStore(`/users/${user.uid}/books/${bookId}/pages`);
    const docs = await pagesFS.getDocs("section", "==", id);
    for (let doc of docs) {
      pagesFS.updateDoc({ section }, doc.id);
    }
  };

  return (
    <Sections
      {...props}
      openPage={openPage}
      onPageDelete={handlePageDelete}
      onSectionDelete={handleSectionDelete}
      onPageTitleSave={handlePageTitleSave}
      onSectionSave={handleSectionSave}
    />
  );
};

SectionsContainer.propTypes = {
  sections: PropTypes.object,
  openPage: PropTypes.func,
  setSelectedPage: PropTypes.func,
};

export default SectionsContainer;
