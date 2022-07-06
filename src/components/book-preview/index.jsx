import React from "react";

const BookPreview = (props) => {
  const { selectedBook } = props;
  return (
    <>
      <h3>{selectedBook.category}</h3>
      <h4>{selectedBook.title}</h4>
    </>
  );
};

export default BookPreview;
