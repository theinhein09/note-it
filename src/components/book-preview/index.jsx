import React from "react";
import PropTypes from "prop-types";
import { RiBookOpenFill } from "react-icons/ri";
import ButtonContainer from "../../containers/button-container";
import BookCover from "../book-cover";
import EditableInputContainer from "../../containers/editable-input-container";

const BookPreview = (props) => {
  const { selectedBook, handleCLick } = props;

  return (
    <>
      {selectedBook && (
        <article className="m-auto w-fit p-5">
          <BookCover />
          <br />
          <div className="flex">
            <EditableInputContainer
              content={selectedBook.category}
              id={selectedBook.category}
              customClassName="text-xl w-full"
            />
          </div>
          <br />
          <div className="flex">
            <EditableInputContainer
              content={selectedBook.title}
              id={selectedBook.id}
              customClassName="w-full"
            />
          </div>
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
