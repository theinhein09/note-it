import React from "react";
import { RiBookOpenFill } from "react-icons/ri";
import ButtonContainer from "../../containers/button-container";

const BookPreview = (props) => {
  const { selectedBook, handleCLick } = props;

  return (
    <>
      {selectedBook && (
        <>
          <h3>{selectedBook.category}</h3>
          <h4>{selectedBook.title}</h4>
          <ButtonContainer onClick={handleCLick} icon={<RiBookOpenFill />} />
        </>
      )}
    </>
  );
};

export default BookPreview;
