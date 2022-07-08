import React from "react";
import PropTypes from "prop-types";
import { RiBookOpenFill } from "react-icons/ri";
import ButtonContainer from "../../containers/button-container";
import BookCover from "../book-cover";

const BookPreview = (props) => {
  const { selectedBook, handleCLick } = props;

  return (
    <>
      {selectedBook && (
        <article className="m-auto w-fit p-5">
          <BookCover />
          <br />
          <h3 className="font-display">{selectedBook.category}</h3>
          <h4 className="font-display">{selectedBook.title}</h4>
          <br />
          <ButtonContainer
            onClick={handleCLick}
            icon={<RiBookOpenFill />}
            label="Open Book"
          />
        </article>
      )}
    </>
  );
};

BookPreview.propTypes = {
  selectedBook: PropTypes.object,
  handleCLick: PropTypes.func,
};

export default BookPreview;
