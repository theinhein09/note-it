import React from "react";

const BookPreview = (props) => {
  const { selectedBook } = props;
  return (
    <>
      <p>{selectedBook.title}</p>
      <p>{selectedBook.category}</p>
    </>
  );
};

export default BookPreview;
