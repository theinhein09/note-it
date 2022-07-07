import React from "react";
import { RiBookOpenFill } from "react-icons/ri";

const BookPreview = (props) => {
  const { selectedBook, handleCLick } = props;

  return (
    <>
      {selectedBook && (
        <>
          <h3>{selectedBook.category}</h3>
          <h4>{selectedBook.title}</h4>
          <button onClick={handleCLick}>
            <RiBookOpenFill />
          </button>
        </>
      )}
    </>
  );
};

export default BookPreview;
