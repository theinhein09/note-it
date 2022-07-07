import React from "react";
import ButtonContainer from "../../containers/button-container";
import ErrorContainer from "../../containers/error-container";

const CreateBookForm = (props) => {
  const { createBook } = props;

  return (
    <form id="create-book-form" onSubmit={createBook}>
      <label htmlFor="book-title">Title</label>
      <input type="text" name="title" id="book-title" />
      <br />
      <label htmlFor="book-category">Category</label>
      <input type="text" name="category" id="book-category" />
      <br />
      <ErrorContainer />
      <ButtonContainer label="Create" type="submit" form="create-book-form" />
    </form>
  );
};

export default CreateBookForm;
