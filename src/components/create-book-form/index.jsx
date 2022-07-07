import React from "react";

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
      <button type="submit" form="create-book-form">
        Create
      </button>
    </form>
  );
};

export default CreateBookForm;
