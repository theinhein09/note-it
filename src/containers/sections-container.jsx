import React from "react";
import Sections from "../components/sections";
import PropTypes from "prop-types";
import FireStore from "../firebase/firestore";
import { useUserContextState } from "../contexts/user-context";
import { useParams } from "react-router-dom";

const SectionsContainer = (props) => {
  const { setSelectedPage } = props;
  const { bookId } = useParams();
  const { user } = useUserContextState();
  const openPage = (page) => (event) => {
    setSelectedPage(page);
  };

  const handlePageDelete = async (pageId) => {
    const pagesFS = new FireStore(
      `users/${user.uid}/books/${bookId}/pages`,
      pageId
    );
    await pagesFS.deleteDoc(pageId);
  };

  return (
    <Sections {...props} openPage={openPage} onPageDelete={handlePageDelete} />
  );
};

SectionsContainer.propTypes = {
  sections: PropTypes.object,
  openPage: PropTypes.func,
  setSelectedPage: PropTypes.func,
};

export default SectionsContainer;
