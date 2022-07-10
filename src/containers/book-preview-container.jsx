import React from "react";
import PropTypes from "prop-types";
import BookPreview from "../components/book-preview";
import { useNavigate } from "react-router-dom";
import FireStore from "../firebase/firestore";
import { useUserContextState } from "../contexts/user-context";

const BookPreviewContainer = (props) => {
  const { selectedBook, setSelectedBook } = props;
  const navigate = useNavigate();
  const { user } = useUserContextState();

  const handleOpen = () => {
    navigate(`${selectedBook.id}`);
  };

  const handleTitleSave = async (data) => {
    const { content: title, id } = data;
    const booksFS = new FireStore(`/users/${user.uid}/books`);
    await booksFS.updateDoc({ title }, id);
  };

  const handleCategorySave = async (data) => {
    const { content: category, id } = data;
    console.log(data);
    const booksFS = new FireStore(`/users/${user.uid}/books`);
    const docs = await booksFS.getDocs("category", "==", id);
    for (let doc of docs) {
      booksFS.updateDoc({ category }, doc.id);
    }
    setSelectedBook((prev) => ({ ...prev, category }));
  };

  return (
    <BookPreview
      {...props}
      onOpen={handleOpen}
      onTitleSave={handleTitleSave}
      onCategorySave={handleCategorySave}
    />
  );
};

BookPreviewContainer.propTypes = {
  selectedBook: PropTypes.object,
  setSelectedBook: PropTypes.func,
};

export default BookPreviewContainer;
