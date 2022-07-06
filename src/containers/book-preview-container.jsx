import React from "react";
import BookPreview from "../components/book-preview";
import { useNavigate } from "react-router-dom";

const BookPreviewContainer = (props) => {
  const { selectedBook } = props;
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate(`${selectedBook.id}`);
  };

  return <BookPreview {...props} handleCLick={handleCLick} />;
};

export default BookPreviewContainer;
