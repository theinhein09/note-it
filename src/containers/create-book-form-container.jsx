import React from "react";
import CreateBookForm from "../components/create-book-form";

const CreateBookFormContainer = (props) => {
  const { closeDialog } = props;

  const createBook = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bookTitle = formData.get("title");
    const bookCategory = formData.get("category");
    console.log(bookTitle, bookCategory);
    // TODO SEND DATA TO FIRESTORE
    event.target.reset();
    closeDialog();
  };
  return <CreateBookForm {...props} createBook={createBook} />;
};

export default CreateBookFormContainer;
