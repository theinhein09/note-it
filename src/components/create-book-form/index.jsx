import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "../../containers/button-container";
import ErrorContainer from "../../containers/error-container";
import InputContainer from "../../containers/input-container";

const CreateBookForm = (props) => {
  const { createBook } = props;

  return (
    <form
      id="create-book-form"
      onSubmit={createBook}
      className="flex min-w-[280px] grow flex-col gap-1 border border-l-[12px] border-black bg-white p-1 font-display"
    >
      <div role="presentation" className="my-1 bg-black p-1 py-2 pl-2">
        <h1 className="text-white">Create New Book</h1>
      </div>
      <br />
      <InputContainer id="book-title" label="Title" name="title" />
      <InputContainer id="book-category" label="Category" name="category" />
      <div className="my-2 flex min-h-[32px] items-center">
        <ErrorContainer />
      </div>
      <ButtonContainer label="Create" type="submit" form="create-book-form" />
      <div className="mt-2 min-h-[80px] border border-black" />
    </form>
  );
};

CreateBookForm.propTypes = {
  createBook: PropTypes.func,
};

export default CreateBookForm;
