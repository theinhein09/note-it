import React from "react";
import PropTypes from "prop-types";
import BookPreview from "../components/book-preview";
import { useNavigate } from "react-router-dom";
import FireStore from "../firebase/firestore";
import { useUserContextState } from "../contexts/user-context";

const BookPreviewContainer = (props) => {
  const { selectedBook } = props;
  const navigate = useNavigate();
  const { user } = useUserContextState();

  const handleOpen = () => {
    navigate(`${selectedBook.id}`);
  };

  const handleSave = async (data) => {
    const { content: title, id } = data;
    const booksFS = new FireStore(`/users/${user.uid}/books`);
    await booksFS.updateDoc({ title }, id);
  };

  return <BookPreview {...props} onOpen={handleOpen} onSave={handleSave} />;
};

BookPreviewContainer.propTypes = {
  selectedBook: PropTypes.object,
};

export default BookPreviewContainer;
