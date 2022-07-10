import React from "react";
import PropTypes from "prop-types";
import { RiBookOpenFill } from "react-icons/ri";
import ButtonContainer from "../../containers/button-container";
import BookCover from "../book-cover";
import EditableInputContainer from "../../containers/editable-input-container";

const BookPreview = (props) => {
  const { selectedBook, onOpen } = props;

  return (
    <>
      {selectedBook && (
        <article className="m-auto w-fit p-5">
          <BookCover />
          <br />
          <div className="flex items-center justify-between gap-1 font-display">
            <div>Title: </div>
            <EditableInputContainer
              content={selectedBook.title}
              id={selectedBook.id}
              customClassName="max-w-[100px]"
            />
          </div>
          <br />
          <div className="flex items-center justify-between gap-1 font-display">
            <div>Category: </div>
            <EditableInputContainer
              content={selectedBook.category}
              id={selectedBook.category}
              customClassName="max-w-[100px]"
            />
          </div>
          <br />
          <ButtonContainer
            onClick={onOpen}
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
  onOpen: PropTypes.func,
};

export default BookPreview;
