import React from "react";
import PropTypes from "prop-types";
import CreateBookForm from "../components/create-book-form";
import { useErrorContextUpdater } from "../contexts/error-context";

const CreateBookFormContainer = (props) => {
  const { closeDialog } = props;
  const setError = useErrorContextUpdater();

  const createBook = (event) => {
    event.preventDefault();
    setError(null);
    try {
      const formData = new FormData(event.currentTarget);
      const bookTitle = formData.get("title");
      if (!bookTitle) throw new Error("Book title is required");
      const bookCategory = formData.get("category") || "Default";
      console.log(bookTitle, bookCategory);
      // TODO SEND DATA TO FIRESTORE
      event.target.reset();
      closeDialog();
    } catch (error) {
      setError(error);
    }
  };

  return <CreateBookForm {...props} createBook={createBook} />;
};

CreateBookFormContainer.propTypes = {
  closeDialog: PropTypes.func,
};

export default CreateBookFormContainer;
