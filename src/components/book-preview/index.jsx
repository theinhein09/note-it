import React from "react";
import PropTypes from "prop-types";
import { RiBookOpenFill } from "react-icons/ri";
import ButtonContainer from "../../containers/button-container";
import BookCover from "../book-cover";
import EditableInputContainer from "../../containers/editable-input-container";

const BookPreview = (props) => {
  const { selectedBook, onOpen, onTitleSave, onCategorySave } = props;

  return (
    <>
      {selectedBook && (
        <article className="m-auto w-fit p-5">
          <BookCover />
          <br />
          <div className="font-display">
            <div className="text-xl">Title</div>
            <EditableInputContainer
              content={selectedBook.title}
              onSave={onTitleSave}
              id={selectedBook.id}
            />
          </div>
          <br />
          <div className="font-display">
            <div className="text-xl">Category</div>
            <EditableInputContainer
              content={selectedBook.category}
              onSave={onCategorySave}
              id={selectedBook.category}
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
  onTitleSave: PropTypes.func,
  onCategorySave: PropTypes.func,
};

export default BookPreview;
