import React from "react";
import ButtonContainer from "../../containers/button-container";
import ErrorContainer from "../../containers/error-container";
import InputContainer from "../../containers/input-container";

const CreateBookForm = (props) => {
  const { createBook } = props;

  return (
    <form id="create-book-form" onSubmit={createBook}>
      <InputContainer id="book-title" label="Title" name="title" />
      <InputContainer id="book-category" label="Category" name="category" />
      <ErrorContainer />
      <ButtonContainer label="Create" type="submit" form="create-book-form" />
    </form>
  );
};

export default CreateBookForm;
