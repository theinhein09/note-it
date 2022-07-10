import React from "react";
import PropTypes from "prop-types";
import BookPreview from "../components/book-preview";
import { useNavigate } from "react-router-dom";

const BookPreviewContainer = (props) => {
  const { selectedBook } = props;
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`${selectedBook.id}`);
  };

  return <BookPreview {...props} onOpen={handleOpen} />;
};

BookPreviewContainer.propTypes = {
  selectedBook: PropTypes.object,
};

export default BookPreviewContainer;
